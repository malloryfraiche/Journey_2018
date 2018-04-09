namespace Journey_2018.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Trip",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TripDate = c.DateTime(nullable: false),
                        StartAddress = c.String(),
                        DestinationAddress = c.String(),
                        Errand = c.String(),
                        Notes = c.String(),
                        User_Id = c.Int(),
                        Vehicle_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.User_Id)
                .ForeignKey("dbo.Vehicle", t => t.Vehicle_Id)
                .Index(t => t.User_Id)
                .Index(t => t.Vehicle_Id);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserVehicleHelper",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserDefaultVehicle = c.Boolean(nullable: false),
                        UserId_Id = c.Int(),
                        VehicleId_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.UserId_Id)
                .ForeignKey("dbo.Vehicle", t => t.VehicleId_Id)
                .Index(t => t.UserId_Id)
                .Index(t => t.VehicleId_Id);
            
            CreateTable(
                "dbo.Vehicle",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RegistrationNumber = c.String(),
                        Kilometers = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserVehicleHelper", "VehicleId_Id", "dbo.Vehicle");
            DropForeignKey("dbo.Trip", "Vehicle_Id", "dbo.Vehicle");
            DropForeignKey("dbo.UserVehicleHelper", "UserId_Id", "dbo.User");
            DropForeignKey("dbo.Trip", "User_Id", "dbo.User");
            DropIndex("dbo.UserVehicleHelper", new[] { "VehicleId_Id" });
            DropIndex("dbo.UserVehicleHelper", new[] { "UserId_Id" });
            DropIndex("dbo.Trip", new[] { "Vehicle_Id" });
            DropIndex("dbo.Trip", new[] { "User_Id" });
            DropTable("dbo.Vehicle");
            DropTable("dbo.UserVehicleHelper");
            DropTable("dbo.User");
            DropTable("dbo.Trip");
        }
    }
}
