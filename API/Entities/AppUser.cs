using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id{set; get;}

        public string UserName{set;get;}

        public byte[] PasswordHash{get;set;}

        public byte[] passwordSalt{get;set;}
    }
}