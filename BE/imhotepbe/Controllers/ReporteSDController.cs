using imhotepbe.Migrations;
using imhotepbe.Models;
using imhotepbe.Models.Panel;
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
        public async Task<IActionResult> Post(int codigo, reporteini ReporteSD)
        {
            try
            {
                ReporteSD.FechaCreacion = DateTime.Now;
                ReporteSD.codigo = codigo; // Assign the provided codigo value
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

        [HttpGet("ultimoCodigo")]
        public async Task<IActionResult> GetUltimoCodigo()
        {
            try
            {
                var ultimoCodigo = await _context.ReporteSD.MaxAsync(r => r.codigo);
                return Ok(ultimoCodigo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("nuevos")]
        public async Task<IActionResult> GetNuevosRegistros()
        {
            try
            {
                var nuevosRegistros = await _context.ReporteSD.Where(r => r.estado == "nuevo").ToListAsync();
                return Ok(nuevosRegistros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var listickets = await _context.ReporteSD.FindAsync(id);
                return Ok(listickets);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, updatesd ReporteSD)
        {
            try
            {


                if (id != ReporteSD.id)
                {
                    return BadRequest();
                }

                var ticketItem = await _context.ReporteSD.FindAsync(id);

                if (ticketItem == null)
                {
                    return NotFound();
                }
                ticketItem.estado = ReporteSD.estado;
                

                await _context.SaveChangesAsync();

                return NoContent();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("reportetipo")]
        public async Task<IActionResult> GetReportetipo()
        {
            try
            {
                var reporte = await _context.ReporteSD
                    .Where(r => r.tipo == "Requerimiento" || r.tipo == "Incidente")
                    .GroupBy(r => 1)
                    .Select(g => new
                    {
                        totalRequerimientos = g.Sum(r => r.tipo == "Requerimiento" ? 1 : 0),
                        totalIncidentes = g.Sum(r => r.tipo == "Incidente" ? 1 : 0)
                    })
                    .FirstOrDefaultAsync();

                return Ok(reporte);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





    }

}
