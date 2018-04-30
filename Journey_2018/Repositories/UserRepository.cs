using Journey_2018.DataAccess;
using Journey_2018.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Journey_2018.Repositories
{
    public class UserRepository : IDisposable
    {
        private DefaultDataContext _ctx;
        private UserManager<IdentityUser> _userManager;

        public UserRepository()
        {
            _ctx = new DefaultDataContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
        }

        public async Task<IdentityResult> RegisterUser(User userModel)
        {
            IdentityUser user = new IdentityUser
            {
                UserName = userModel.UserName,
                Email = userModel.UserName
            };
            
            var result = await _userManager.CreateAsync(user, userModel.Password);
            return result;
        }


        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser user = await _userManager.FindAsync(userName, password);
            return user;
        }

        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();
        }
    }
}