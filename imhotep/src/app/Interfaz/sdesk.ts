export interface registroticket {
    // columna db 
    id?: number,
    area?: string,
    tipo?:string,
    descripcion?:string,
    estado:string,
    codigo?:number,
    asignado?:string,
    comentariofinal?:string,
    fechasd?:string,
        
    }

    export interface ticketdashboard {
        // Otras propiedades de la interfaz...
      
        totalRequerimientos: number;
        totalIncidentes: number;
      
        // Otras propiedades de la interfaz...
      }