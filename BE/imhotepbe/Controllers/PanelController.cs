using imhotepbe.Models;
using imhotepbe.Models.Panel;
using imhotepbe.Models.Reporte;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace imhotepbe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PanelController : ControllerBase
    {
        private readonly imhotepcontext _context;

        public PanelController(imhotepcontext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var registrarusuario = await _context.Usuarios.ToListAsync();
                return Ok(registrarusuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(cusuario Usuarios)
        {
            try
            {
                Usuarios.FechaCreacion = DateTime.Now;
                _context.Add(Usuarios);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = Usuarios.id }, Usuarios);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("iniciosesion")]
        public async Task<IActionResult> Postsesion(login Usuarios)
        {
            try
            {
                var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.nombre == Usuarios.nombre);

                if (usuario != null && usuario.password == Usuarios.password)
                {
                    return Ok();
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("iniciosesion/tipo/{nombre}")]
        public async Task<IActionResult> GetTipoUsuario(string nombre)
        {
            try
            {
                var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.nombre == nombre);

                if (usuario != null)
                {
                    var tipoUsuario = usuario.tipo;
                    return Ok(new { tipo = tipoUsuario });
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("iniciosesion")]
        public async Task<IActionResult> GetTipoUsuario([FromQuery] string nombre, [FromQuery] string password)
        {
            try
            {
                var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.nombre == nombre && u.password == password);

                if (usuario != null)
                {
                    return Ok(usuario.tipo);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("variabletipo/{nombre}")]
        public async Task<IActionResult> GetVariableTipo(string nombre)
        {
            try
            {
                var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.nombre == nombre);

                if (usuario != null)
                {
                    var variableTipo = usuario.variabletipo;
                    return Ok(variableTipo);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}