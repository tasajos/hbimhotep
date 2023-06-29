import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {registroticket  } from '../Interfaz/sdesk';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SdeskService {

  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/ReporteSD';
  private Myapiurlp: string = 'api/ReporteSD';


//constructor
  constructor(private http: HttpClient) { }


  //funcion obtener resultados
  getregistros(): Observable<registroticket[]> {
     
    return this.http.get<registroticket[]>(this.Myappurl+this.Myapiurl);
  }

    addregistros (cajachica: registroticket): Observable<registroticket>{

      return this.http.post<registroticket>(`${this.Myappurl}${this.Myapiurlp}`,cajachica);
      
    }




//////////////////////////
///OTROS          ///////
/////////////////////////





    }
  
