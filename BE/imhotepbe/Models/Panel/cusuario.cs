namespace imhotepbe.Models.Panel
{
    public class cusuario
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int ci { get; set; }
        public string extension { get; set; }
        public string tipo { get; set; }
        public string password { get; set; }

        public int variabletipo { get; set; }
        public DateTime FechaCreacion { get; set; }

        public void AsignarVariableTipo()
        {
            if (tipo == "manager")
            {
                variabletipo = 3;
            }
            else if (tipo == "admin")
            {
                variabletipo = 2;
            }
            else if (tipo == "usuario")
            {
                variabletipo = 1;
            }
            else
            {
                variabletipo = 0; // Valor predeterminado o para otro caso no especificado
            }
        }

    }
}
