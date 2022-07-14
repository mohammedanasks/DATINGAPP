using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Interfacess;
using API.Servicess;
using Microsoft.EntityFrameworkCore;

namespace API.Extentions
{
    public static class ApplicatinServiceExtentions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration config)
        {       
               services.AddScoped<ITokenServices ,TokenService>();
               services.AddDbContext<DataContext>(options =>{

               options.UseSqlite(config.GetConnectionString("DefaultConnection")) ;
            });

            return services;

         

        }
    }
}