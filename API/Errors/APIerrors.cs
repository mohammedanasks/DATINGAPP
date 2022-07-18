using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class APIerrors
    {
        public APIerrors(int statuscode, string messages=null, string details=null)
        {
            this.statuscode = statuscode;
            this.messages = messages;
            this.details = details;
        }

        public int statuscode{get;set;}
        public string messages{get;set;}
        public string details{get;set;}
        
    }
}