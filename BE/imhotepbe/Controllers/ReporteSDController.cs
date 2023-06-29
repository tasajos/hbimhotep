using imhotepbe.Models;
using imhotepbe.Models.Reporte;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace imhotepbe.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class ReporteSDController : ControllerBase

    {
        private readonly imhotepcontext _context;

        public ReporteSDController(imhotepcontext context)
        {

            //RegistrosSD
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaregistros = await _context.ReporteSD.ToListAsync();
                return Ok(listaregistros);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }

        [HttpPost]

        public async Task<IActionResult> Post(reporteini ReporteSD)
        {
            try
            {
                ReporteSD.FechaCreacion = DateTime.Now;
                _context.Add(ReporteSD);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = ReporteSD.id }, ReporteSD);

            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }



    }

}
