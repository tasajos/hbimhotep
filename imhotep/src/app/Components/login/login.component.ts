import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PanelService } from 'src/app/services/panel.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  loginUsuario: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private panelService: PanelService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginUsuario = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginS() {
    if (this.loginUsuario.valid) {
      const nombre = this.loginUsuario.value.nombre;
      const password = this.loginUsuario.value.password;

      // Llamar al servicio para verificar la autenticación
      this.panelService.verificarAutenticacion(nombre, password).subscribe(
        () => {
          // Autenticación exitosa, redirigir al usuario a la página principal
          this.isLoggedIn = true;
          this.mensajeExito('registrado');
          this.panelService.obtenerVariableTipo(nombre).subscribe(
            (variableTipo) => {
              if (variableTipo === 3) {
                this.router.navigate(['/principal']);
              } else if (variableTipo === 2) {
                this.router.navigate(['/principal']);
              } 
              else if (variableTipo === 1) {
                this.router.navigate(['/principalu']);
              }
              else {
                this.mensajeFallido('Tipo de usuario incorrecto');
              }
            },
            (error) => {
              console.log(error);
              this.mensajeFallido('ERROR');
            }
          );
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

  mensajeExito(texto: string) {
    this._snackBar.open(`El inicio de sesión fue exitoso ${texto} con éxito`, '', {
      duration: 2000,
      horizontalPosition: 'right'
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