using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfacess
{
    public interface ITokenServices
    {
        string CreateToken(AppUser user);
    }
}