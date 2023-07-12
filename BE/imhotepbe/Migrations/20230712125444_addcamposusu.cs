using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace imhotepbe.Migrations
{
    /// <inheritdoc />
    public partial class addcamposusu : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "asignado",
                table: "ReporteSD",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "comentariofinal",
                table: "ReporteSD",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "asignado",
                table: "ReporteSD");

            migrationBuilder.DropColumn(
                name: "comentariofinal",
                table: "ReporteSD");
        }
    }
}
