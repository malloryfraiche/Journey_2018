using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public virtual Vehicle Vehicle { get; set; }

        public List<Trip> Trips { get; set; }

        public User()
        {
            Trips = new List<Trip>();
        }
    }
}