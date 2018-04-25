namespace Journey_2018.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class update : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Vehicle", "User_Id", "dbo.User");
            DropIndex("dbo.Vehicle", new[] { "User_Id" });
            AlterColumn("dbo.Vehicle", "User_Id", c => c.String());
            DropTable("dbo.User");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UserName = c.String(nullable: false),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(nullable: false),
                        Password = c.String(nullable: false, maxLength: 100),
                        ConfirmPassword = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AlterColumn("dbo.Vehicle", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Vehicle", "User_Id");
            AddForeignKey("dbo.Vehicle", "User_Id", "dbo.User", "Id");
        }
    }
}
