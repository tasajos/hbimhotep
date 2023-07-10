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
  private Myapiurput: string = 'api/ReporteSD/';
  private Myapiurlp: string = 'api/ReporteSD';
  private Myapiurid: string = 'api/ReporteSD/';
  private Myapiurlsd: string = 'api/ReporteSD/nuevos';
  private Myapiurlst: string = 'api/ReporteSD/reportetipo';


//constructor
  constructor(private http: HttpClient) { }


  //funcion obtener resultados
  getregistros(): Observable<registroticket[]> {
     
    return this.http.get<registroticket[]>(this.Myappurl+this.Myapiurl);
  }

  getregistrosnuevos(): Observable<registroticket[]> {
     
    return this.http.get<registroticket[]>(this.Myappurl+this.Myapiurlsd);
  }

  gettiposreq(): Observable<registroticket[]> {
     
    return this.http.get<registroticket[]>(this.Myappurl+this.Myapiurlst);
  }


    //addregistros (ticket: registroticket): Observable<registroticket>{

      //return this.http.post<registroticket>(`${this.Myappurl}${this.Myapiurlp}`,ticket);
      
    //}

    addregistros(codigo: number, ticket: registroticket): Observable<registroticket> {
      return this.http.post<registroticket>(`${this.Myappurl}${this.Myapiurlp}?codigo=${codigo}`, ticket);
    }

    getUltimoCodigo(): Observable<number> {
      return this.http.get<number>(`${this.Myappurl}${this.Myapiurlp}/ultimoCodigo`);
    }


    getidticket(id:number): Observable<registroticket>{

      return this.http.get<registroticket>(`${this.Myappurl}${this.Myapiurid}${id}`)
  
    }

    updateticket(id: number, edticket: registroticket): Observable<void> {
      return this.http.put<void>(`${this.Myappurl}${this.Myapiurput}${id}`, edticket);
    }


    addTickets  (tck: registroticket): Observable<registroticket>{

      return this.http.post<registroticket>(`${this.Myappurl}${this.Myapiurl}`,tck);
    
    }
//////////////////////////
///OTROS          ///////
/////////////////////////





    }
  
