using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string UserName{get; set;}
        
        [Required]
        [StringLength(8,MinimumLength =5)]
        public string password{get; set;}
    }
}