import { registroticket  } from 'src/app/Interfaz/sdesk';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SdeskService } from 'src/app/services/sdesk.service';


@Component({
  selector: 'app-eticket',
  templateUrl: './eticket.component.html',
  styleUrls: ['./eticket.component.css']
})
export class EticketComponent {
  loading: boolean = false;
  id: number;
  formulario:FormGroup;
      
  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _rservice:SdeskService,
    private aRoute: ActivatedRoute,
    private router: Router,) 
    
    {
		
    //construimos el formulario

    this.formulario = this.fb.group({
    
      estado: ['', Validators.required],
      asignado: ['', Validators.required],
      comentariofinal: ['', Validators.required],
     
        
      
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }
    registrarcuenta(){

      //armamos el objeto
       const rticket: registroticket = {
       
        estado: this.formulario.value.estado,
        asignado: this.formulario.value.asignado,
        comentariofinal: this.formulario.value.comentariofinal,
            
       }
  
      if(this.id != 0) {
        rticket.id = this.id;
        this.editarTicket(this.id, rticket);
      } else {
        this.agregarTickets(rticket);
      }

  

  

    }
    
    editarTicket(id: number, ticket: registroticket) {
    this.loading = true;
    this._rservice.updateticket(id, ticket).subscribe(() => {
      this.loading = false;
      console.log('Actualizado')
      this.mensajeExito('actualizada');
      this.router.navigate(['/tickets']);
    })
  }
    mensajeExito(texto: string) {
      this._snackBar.open(`El ticket fue editado ${texto} con exito`,'', {
        duration: 4000,
        horizontalPosition: 'right',
      });
    }
    agregarTickets(rticket: registroticket) {
        this._rservice.addTickets(rticket).subscribe(data => {
          this.mensajeExito('registrada');
          this.router.navigate(['/tickets']);
        })
    }

}
