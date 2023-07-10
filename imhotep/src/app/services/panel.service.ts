import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { crearusuarioInter } from '../Interfaz/panel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Panel';
  private Myapiurlp: string = 'api/Panel';
  private Myapiurlpi: string = 'api/Panel/iniciosesion/';
  private Myapiurlpic: string = 'api/Panel/iniciosesion/';
  private Myapiurlvt: string = 'api/Panel/variabletipo/';
  

  constructor(private http: HttpClient) { }

  getusuarios(): Observable<crearusuarioInter[]> {
    return this.http.get<crearusuarioInter[]>(`${this.Myappurl}${this.Myapiurl}`);
  }

  addusuarios(crearusuario: crearusuarioInter): Observable<crearusuarioInter> {
    return this.http.post<crearusuarioInter>(`${this.Myappurl}${this.Myapiurlp}`, crearusuario);
  }

  asignarVariableTipo(tipo: string): number {
    switch (tipo) {
      case 'manager':
        return 3;
      case 'admin':
        return 2;
      case 'usuario':
        return 1;
      default:
        return 0; // Valor predeterminado o para otro caso no especificado
    }
  }

  verificarAutenticacion(nombre: string, password: string): Observable<void> {
    const body = {
      nombre: nombre,
      password: password
    };

    return this.http.post<void>(`${this.Myappurl}${this.Myapiurlpi}`, body);
  }

  obtenerVariableTipo(nombre: string): Observable<number> {
    return this.http.get<number>(`${this.Myappurl}${this.Myapiurlvt}${nombre}`);
  }
}