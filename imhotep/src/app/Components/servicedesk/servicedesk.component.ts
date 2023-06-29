import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { SdeskService } from 'src/app/services/sdesk.service';
import { HttpClient } from '@angular/common/http';
import {registroticket  } from 'src/app/Interfaz/sdesk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicedesk',
  templateUrl: './servicedesk.component.html',
  styleUrls: ['./servicedesk.component.css']
})
export class ServicedeskComponent implements OnInit {
  formulario: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private _rregistro: SdeskService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      area: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
 
         });
  }

  registrarcuenta() {

     const rcactivo: registroticket = {
      area: this.formulario.value.area,
      tipo: this.formulario.value.tipo,
      descripcion: this.formulario.value.descripcion,
     

    };
    // Enviamos objeto al backend
    this._rregistro.addregistros(rcactivo).subscribe(_data => {
      
      location.reload();
     // this.router.navigate(['/principal']);;
    //this.numero++; // Incrementamos el número después de cada registro exitoso
  });
      
    
  }

 
 //
  //mensajeExito(texto: string) {
    //this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
      //duration: 2000,
      //horizontalPosition: 'right',
    //});
 // }

  ngOnInit(): void {

 
   // Lógica del campo
}



}


