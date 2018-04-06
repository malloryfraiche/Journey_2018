using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public List<Trip> Trips { get; set; }

        public User()
        {
            Trips = new List<Trip>();
        }

    }
}