using Journey_2018.Migrations;
using Journey_2018.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Journey_2018.DataAccess
{
    public class DefaultDataContext : DbContext 
    {
        // Configuring the Entity Framework connection.
        public DefaultDataContext() : base("Journey") { }

        public DbSet<User> Users { get; set; }

        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<Trip> Trips { get; set; }


        // Turn off Entity Frameworks pluralizing table name conventions.
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);

            //
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DefaultDataContext, Configuration>());
        }
    }
}