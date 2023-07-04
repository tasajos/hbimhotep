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
    public class PanelController : ControllerBase
    {

        private readonly imhotepcontext _context;

        public PanelController(imhotepcontext context)
        {

            //RegistrosSD
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
                // Handle other errors
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
                    // Autenticación exitosa
                    // Puedes devolver una respuesta 200 OK o algún otro código de estado adecuado
                    return Ok();
                }
                else
                {
                    // Credenciales inválidas
                    // Puedes devolver una respuesta 401 Unauthorized o algún otro código de estado adecuado
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }
        }

    }
}
