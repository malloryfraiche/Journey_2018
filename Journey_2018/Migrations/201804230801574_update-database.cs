namespace Journey_2018.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedatabase : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Trip", "User_Id", "dbo.User");
            DropForeignKey("dbo.User", "Vehicle_Id", "dbo.Vehicle");
            DropForeignKey("dbo.UserVehicleHelper", "UserId_Id", "dbo.User");
            DropForeignKey("dbo.UserVehicleHelper", "VehicleId_Id", "dbo.Vehicle");
            DropIndex("dbo.Trip", new[] { "User_Id" });
            DropIndex("dbo.User", new[] { "Vehicle_Id" });
            DropIndex("dbo.UserVehicleHelper", new[] { "UserId_Id" });
            DropIndex("dbo.UserVehicleHelper", new[] { "VehicleId_Id" });
            AddColumn("dbo.User", "UserName", c => c.String(nullable: false));
            AddColumn("dbo.Vehicle", "User_Id", c => c.Int());
            CreateIndex("dbo.Vehicle", "User_Id");
            AddForeignKey("dbo.Vehicle", "User_Id", "dbo.User", "Id");
            DropColumn("dbo.Trip", "User_Id");
            DropColumn("dbo.User", "Vehicle_Id");
            DropTable("dbo.UserVehicleHelper");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.UserVehicleHelper",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserDefaultVehicle = c.Boolean(nullable: false),
                        UserId_Id = c.Int(nullable: false),
                        VehicleId_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.User", "Vehicle_Id", c => c.Int());
            AddColumn("dbo.Trip", "User_Id", c => c.Int());
            DropForeignKey("dbo.Vehicle", "User_Id", "dbo.User");
            DropIndex("dbo.Vehicle", new[] { "User_Id" });
            DropColumn("dbo.Vehicle", "User_Id");
            DropColumn("dbo.User", "UserName");
            CreateIndex("dbo.UserVehicleHelper", "VehicleId_Id");
            CreateIndex("dbo.UserVehicleHelper", "UserId_Id");
            CreateIndex("dbo.User", "Vehicle_Id");
            CreateIndex("dbo.Trip", "User_Id");
            AddForeignKey("dbo.UserVehicleHelper", "VehicleId_Id", "dbo.Vehicle", "Id", cascadeDelete: true);
            AddForeignKey("dbo.UserVehicleHelper", "UserId_Id", "dbo.User", "Id", cascadeDelete: true);
            AddForeignKey("dbo.User", "Vehicle_Id", "dbo.Vehicle", "Id");
            AddForeignKey("dbo.Trip", "User_Id", "dbo.User", "Id");
        }
    }
}
