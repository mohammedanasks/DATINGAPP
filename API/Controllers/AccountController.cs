using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Entities;
using API.Interfacess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
   
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenServices _Tokenservice;

        public AccountController(DataContext context,ITokenServices Tokenservice)
        {
            _Tokenservice = Tokenservice;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>>Register([FromBody]RegisterDto  registerdto){
            using   var hmac= new HMACSHA512();

            if(await Userexist(registerdto.UserName)){
                return BadRequest("user alredy taken");
            }
            var user= new AppUser
            {
                UserName = registerdto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes( registerdto.password)),
                passwordSalt = hmac.Key
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return new UserDto
            {
                UserName=user.UserName,
                Token=_Tokenservice.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>>Login([FromBody]LoginDto loginDto){
            var user =await _context.Users.SingleOrDefaultAsync(x=>x.UserName==loginDto.Username);
            if(user==null)return Unauthorized("invalid username");

            using var hmac= new HMACSHA512(user.passwordSalt);
            var computedhash=hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for(int i=0;i<computedhash.Length;i++)
            {
                if(computedhash[i] !=user.PasswordHash[i])return Unauthorized("invalid password");
            }
             return new UserDto
            {
                UserName=user.UserName,
                Token=_Tokenservice.CreateToken(user)
            };

        }

        public async Task<bool>Userexist(string username){
            return await _context.Users.AnyAsync(x=> x.UserName==username.ToLower());
        }





       
           

        


       
    }
}