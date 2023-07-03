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
   private Myapiurl: string = 'api/ReporteSD';
   private Myapiurlp: string = 'api/ReporteSD';
 
 
 //constructor
   constructor(private http: HttpClient) { }
 
 
   //funcion obtener resultados
   getregistros(): Observable<crearusuarioInter[]> {
      
     return this.http.get<crearusuarioInter[]>(this.Myappurl+this.Myapiurl);
   }
 
     addregistros (cajachica: crearusuarioInter): Observable<crearusuarioInter>{
 
       return this.http.post<crearusuarioInter>(`${this.Myappurl}${this.Myapiurlp}`,cajachica);
       
     }
 
 
 
 
 //////////////////////////
 ///OTROS          ///////
 /////////////////////////
 
 
 
 
 
     }
   
 