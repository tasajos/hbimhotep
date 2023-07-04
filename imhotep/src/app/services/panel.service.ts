import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {crearusuarioInter  } from '../Interfaz/panel';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

   //entorno para llamar

   private Myappurl: string = environment.endpoint;
   private Myapiurl: string = 'api/Panel';
   private Myapiurlp: string = 'api/Panel';
   private Myapiurlpi: string = 'api/Panel/iniciosesion';
 
 
 //constructor
   constructor(private http: HttpClient) { }
 
 
   //funcion obtener resultados
   getusuarios(): Observable<crearusuarioInter[]> {
      
     return this.http.get<crearusuarioInter[]>(this.Myappurl+this.Myapiurl);
   }
 
     addusuarios (crearusuario: crearusuarioInter): Observable<crearusuarioInter>{
 
       return this.http.post<crearusuarioInter>(`${this.Myappurl}${this.Myapiurlp}`,crearusuario);
       
     }
 
     verificarAutenticacion(nombre: string, password: string) {
      // Realizar la solicitud HTTP para verificar la autenticación en tu backend
      const body = {
        nombre: nombre,
        password: password
      };
  
      return this.http.post(`${this.Myappurl}${this.Myapiurlpi}`, body);
    }
 
 
 
 //////////////////////////
 ///OTROS          ///////
 /////////////////////////
 
 
 
 
 
     }
   
 