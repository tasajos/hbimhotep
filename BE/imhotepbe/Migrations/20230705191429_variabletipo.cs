using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace imhotepbe.Migrations
{
    /// <inheritdoc />
    public partial class variabletipo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "variabletipo",
                table: "Usuarios",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "variabletipo",
                table: "Usuarios");
        }
    }
}
