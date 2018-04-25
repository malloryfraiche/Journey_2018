namespace Journey_2018.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatesInVehicleModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Vehicle", "User_Id", "dbo.User");
            DropIndex("dbo.Vehicle", new[] { "User_Id" });
            AlterColumn("dbo.Vehicle", "User_Id", c => c.Int(nullable: true));
            CreateIndex("dbo.Vehicle", "User_Id");
            AddForeignKey("dbo.Vehicle", "User_Id", "dbo.User", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Vehicle", "User_Id", "dbo.User");
            DropIndex("dbo.Vehicle", new[] { "User_Id" });
            AlterColumn("dbo.Vehicle", "User_Id", c => c.Int());
            CreateIndex("dbo.Vehicle", "User_Id");
            AddForeignKey("dbo.Vehicle", "User_Id", "dbo.User", "Id");
        }
    }
}
