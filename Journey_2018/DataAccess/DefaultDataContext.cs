using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Journey_2018.DataAccess
{
    public class DefaultDataContext : DbContext 
    {
        // Configuring the Entity Framework connection.
        public DefaultDataContext() : base("Journey") { }


    }
}