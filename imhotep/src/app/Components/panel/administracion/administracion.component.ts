import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { PanelService } from 'src/app/services/panel.service';
import { HttpClient } from '@angular/common/http';
import { crearusuarioInter } from 'src/app/Interfaz/panel';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  formulario: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _ringresosservice: PanelService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ci: ['', Validators.required],
      Extension: ['', Validators.required],
      tipo: ['', Validators.required],
      password: ['', Validators.required],
         });
  }

  registrarusuario() {

     const rcactivo: crearusuarioInter = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      ci: this.formulario.value.ci,
      Extension: this.formulario.value.Extension,
      tipo: this.formulario.value.tipo,
      password: this.formulario.value.password,
      variabletipo: 0 

    };
    rcactivo.variabletipo = this._ringresosservice.asignarVariableTipo(rcactivo.tipo);

    // Enviamos objeto al backend
    this._ringresosservice.addusuarios(rcactivo).subscribe(_data => {
      this.mensajeExito('registrado');
      setTimeout(() => {
        location.reload();
      }, 2000); // Wait for 2 seconds (2000 milliseconds) before reloading the page
    },
    error => {
      // Handle error case if the HTTP request fails
      console.error(error);
      this.mensajeError('Ocurrió un error al registrar el usuario.');

    //this.numero++; // Incrementamos el número después de cada registro exitoso
  });
      
    
  }


  mensajeExito(texto: string) {
    this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

  ngOnInit(): void {

  }
  mensajeError(texto: string) {
    this._snackBar.open(texto, '', {
      duration: 2000,
      horizontalPosition: 'right',
      panelClass: 'error-snackbar', // Add this line to apply a CSS class for error styling
    });
  }

}
