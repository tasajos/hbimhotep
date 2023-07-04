import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PanelService } from 'src/app/services/panel.service';
import { HttpClient } from '@angular/common/http';
import {registroticket  } from 'src/app/Interfaz/sdesk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  isLoggedIn = false;
  loginUsuario : FormGroup;
  errorMessage: string = '';
 

  constructor(
    private fb: FormBuilder,
    private _rregistro: PanelService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.loginUsuario = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    
         });
  }

  
  loginS(){
    if (this.loginUsuario.valid) {
      const nombre = this.loginUsuario.value.nombre;
      const password = this.loginUsuario.value.password;

      // Llamar al servicio para verificar la autenticación
      this._rregistro.verificarAutenticacion(nombre, password).subscribe(
        () => {
          // Autenticación exitosa, redirigir al usuario a la página principal
          this.isLoggedIn = true;
          this.mensajeExito('registrado');
          this.router.navigate(['/principal']);
          // Aquí puedes redirigir al usuario a la página principal utilizando la lógica de tu aplicación (por ejemplo, Router.navigate)
        },
        (error) => {
          // Manejar el error de autenticación
          console.log(error);
          this.mensajeFallido('ERROR');
          this.errorMessage = 'Usuario/contraseña incorrectos';
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error si lo deseas
    }
  }


 //
  mensajeExito(texto: string) {
    this._snackBar.open(` El inicio de sesion fue exitoso ${texto} con exito`, '', {
    duration: 2000,
    horizontalPosition: 'right',
    });
  }

  mensajeFallido(texto: string) {
    this._snackBar.open(`USUARIO O PASSWORD INVALIDO ${texto} `, '', {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['invalid-password']
    });
  }


  ngOnInit(): void {

 
   // Lógica del campo
}



}



