﻿using imhotepbe.Models.Panel;
using imhotepbe.Models.Reporte;
using Microsoft.EntityFrameworkCore;

namespace imhotepbe.Models
{
    public class imhotepcontext : DbContext
    {
        public imhotepcontext(DbContextOptions<imhotepcontext> options) : base(options)
        {


        }
        //reporte

        public DbSet<reporteini> ReporteSD { get; set; } //<clase> Nombre de la tabla



        ////////////
        ///panel////
        ////////////
        public DbSet<cusuario> Usuarios { get; set; } //<clase> Nombre de la tabla


    }

}


