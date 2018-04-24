﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Journey_2018.DataAccess;
using Journey_2018.Models;
using Journey_2018.Repositories;
using Microsoft.AspNet.Identity;

namespace Journey_2018.Controllers
{
    public class UsersController : ApiController
    {
        private UserRepository _repo = null;
        public UsersController()
        {
            _repo = new UserRepository();
        }

        // POST api/Users/Register
        [AllowAnonymous]
        [Route("api/Users/Register")]
        [HttpPost]
        public async Task<IHttpActionResult> Register(User userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            IdentityResult result = await _repo.RegisterUser(userModel);

            if (result == null) return InternalServerError();

            IHttpActionResult errorResult = GetErrorResult(result);

            if (errorResult != null)
            {
                return errorResult;
            }

            return Ok();
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }





        //// POST: api/Users
        //[ResponseType(typeof(User))]
        //[HttpPost]
        //[Route("api/Users")]
        //public async Task<IHttpActionResult> PostUser(User user)
        //{
        //    var db = new DefaultDataContext();

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var theUser = new User()
        //    {
        //        UserName = user.UserName,
        //        FirstName = user.FirstName,
        //        LastName = user.LastName,
        //        Email = user.Email,
        //    };

        //    IdentityResult theUserResult = await .CreateAsync(theUser, user.Password);


        //    //db.Users.Add(theUser);
        //    //await db.SaveChangesAsync();

        //    return Ok(user);
        //}












        //// GET: api/Users
        //public IQueryable<User> GetUsers()
        //{
        //    return db.Users;
        //}

        //// GET: api/Users/5
        //[ResponseType(typeof(User))]
        //public async Task<IHttpActionResult> GetUser(int id)
        //{
        //    User user = await db.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        //// PUT: api/Users/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutUser(int id, User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != user.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);


        //}


        //// POST: api/Users
        //[ResponseType(typeof(User))]
        //[HttpPost]
        //[Route("api/Users")]
        //public async Task<IHttpActionResult> PostUser(User user)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Users.Add(user);
        //    await db.SaveChangesAsync();

        //    //return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        //    return Ok(user);
        //}

        ////[HttpPost]
        ////[Route("api/Users")]
        ////public string PostUser(User user)
        ////{
        ////    if (user.Id > 0)
        ////    {
        ////        db.Entry(user).State = EntityState.Modified;
        ////    }
        ////    else
        ////    {
        ////        db.Users.Add(user);
        ////    }
        ////    db.SaveChanges();
        ////    return string.Format("{0} {1}", user.FirstName, user.LastName);
        ////}






        //// DELETE: api/Users/5
        //[ResponseType(typeof(User))]
        //public async Task<IHttpActionResult> DeleteUser(int id)
        //{
        //    User user = await db.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Users.Remove(user);
        //    await db.SaveChangesAsync();

        //    return Ok(user);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool UserExists(int id)
        //{
        //    return db.Users.Count(e => e.Id == id) > 0;
        //}
    }
}