using Journey_2018.Migrations;
using Journey_2018.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Journey_2018.DataAccess
{
    public class DefaultDataContext : IdentityDbContext<IdentityUser>
    {
        // Configuring the Entity Framework connection.
        public DefaultDataContext() : base("Journey2018") { }

        //public DbSet<User> Users { get; set; }

        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<Trip> Trips { get; set; }

        //public DbSet<UserVehicleHelper> UserVehicleHelpers { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Turn off Entity Frameworks pluralizing table name conventions.
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            base.OnModelCreating(modelBuilder);

            // to update DB to latest version from "code-first".
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DefaultDataContext, Configuration>());
        }
    }
}