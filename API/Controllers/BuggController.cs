using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class BuggController : BaseApiController
    {
         private readonly DataContext _context;
        public BuggController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string>UnAuth(){
            return ("unauthorized response");
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser>NotFounde(){
            var data=_context.Users.Find(-1);
            if(data==null)return NotFound();
            return Ok(data);
        }

        [HttpGet("server-error")]
        public ActionResult<string>ServerError(){
            var data=_context.Users.Find(-1);
            var returndata=data.ToString();
            return returndata;
        }

        [HttpGet("bad-request")]
        public ActionResult<string>BadRequests(){
            return BadRequest("this is not a goog request");
        }
    }
}