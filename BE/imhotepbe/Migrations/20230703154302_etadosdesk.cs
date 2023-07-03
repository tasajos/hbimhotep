using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace imhotepbe.Migrations
{
    /// <inheritdoc />
    public partial class etadosdesk : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "estado",
                table: "ReporteSD",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "estado",
                table: "ReporteSD");
        }
    }
}
