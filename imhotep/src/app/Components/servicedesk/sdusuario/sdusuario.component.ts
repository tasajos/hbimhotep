import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SdeskService } from 'src/app/services/sdesk.service';
import { HttpClient } from '@angular/common/http';
import {registroticket  } from 'src/app/Interfaz/sdesk';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sdusuario',
  templateUrl: './sdusuario.component.html',
  styleUrls: ['./sdusuario.component.css']
})
export class SdusuarioComponent implements OnInit {
  formulario: FormGroup;
  codigo: number = 0;
 

  constructor(
    private fb: FormBuilder,
    private _rregistro: SdeskService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      area: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      fechasd: ['', Validators.required],
      asignado: [''],
      comentariofinal: [''],
 
         });
  }

  registrarcuenta() {
    this._rregistro.getUltimoCodigo().subscribe((prevCode: number) => {
      this.codigo = prevCode + 1; // Increment the previous code by 1
  
      const rcactivo: registroticket = {
        codigo: this.codigo,
        area: this.formulario.value.area,
        tipo: this.formulario.value.tipo,
        descripcion: this.formulario.value.descripcion,
        estado: this.formulario.value.estado,
        asignado: this.formulario.value.asignado,
        comentariofinal: this.formulario.value.comentariofinal,
        fechasd: this.formulario.value.fechasd,
      };
  
      // Enviamos objeto al backend
      this._rregistro.addregistros(this.codigo, rcactivo).subscribe(() => {
        this.mensajeExito('registrado');
     
        setTimeout(() => {
          location.reload();
        }, 2000); // Wait for 2 seconds before reloading the page
      });
    });
  }

 
 //
  mensajeExito(texto: string) {
    this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
    duration: 2000,
    horizontalPosition: 'right',
    });
  }

  ngOnInit(): void {
const fechaActual = new Date().toLocaleDateString();
    this.formulario.patchValue({ fechasd: fechaActual });
   // Lógica del campo
 
   // Lógica del campo
}



}


