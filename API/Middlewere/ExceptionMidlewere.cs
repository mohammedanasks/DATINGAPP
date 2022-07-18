using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;

namespace API.Middlewere
{
    public class ExceptionMidlewere
    {
        private readonly RequestDelegate _next;
        private readonly IHostEnvironment _env;
        private readonly ILogger _logger;
    
        public ExceptionMidlewere(RequestDelegate next,ILogger<ExceptionMidlewere>logger,IHostEnvironment env)
        {
            _env = env;
            _next = next;
            _logger=logger;
         
        }

        public async Task InvokeAsync(HttpContext context){

            try
            {
                await this._next(context);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex,ex.Message);
                context.Response.ContentType="application/json";
                context.Response.StatusCode=(int)HttpStatusCode.InternalServerError;
 
                var respons=_env.IsDevelopment()
                ? new APIerrors(context.Response.StatusCode,ex.Message,ex.StackTrace?.ToString())
                : new APIerrors(context.Response.StatusCode,"internal server error");

                var options= new JsonSerializerOptions{PropertyNamingPolicy=JsonNamingPolicy.CamelCase};
                var jason=JsonSerializer.Serialize(respons,options);

                await context.Response.WriteAsync(jason);

            }
            
        }
    }
}