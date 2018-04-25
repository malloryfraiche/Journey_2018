namespace Journey_2018.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatesInTripModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Trip", "Vehicle_Id", "dbo.Vehicle");
            DropIndex("dbo.Trip", new[] { "Vehicle_Id" });
            AlterColumn("dbo.Trip", "Vehicle_Id", c => c.Int(nullable: true));
            CreateIndex("dbo.Trip", "Vehicle_Id");
            AddForeignKey("dbo.Trip", "Vehicle_Id", "dbo.Vehicle", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trip", "Vehicle_Id", "dbo.Vehicle");
            DropIndex("dbo.Trip", new[] { "Vehicle_Id" });
            AlterColumn("dbo.Trip", "Vehicle_Id", c => c.Int());
            CreateIndex("dbo.Trip", "Vehicle_Id");
            AddForeignKey("dbo.Trip", "Vehicle_Id", "dbo.Vehicle", "Id");
        }
    }
}
