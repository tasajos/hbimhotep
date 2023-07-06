import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';
import { ProcessmakerComponent } from './Components/processmaker/processmaker.component';
import { PanelComponent } from './Components/panel/panel.component';
import { AdministracionComponent } from './Components/panel/administracion/administracion.component';
import { MantenimientoComponent } from './Components/panel/mantenimiento/mantenimiento.component';
import { LoginComponent } from './Components/login/login.component';
import { PrincipalusuarioComponent } from './Components/principalusuario/principalusuario.component';
import { SdusuarioComponent } from './Components/servicedesk/sdusuario/sdusuario.component';
import { ListaticketComponent } from './Components/servicedesk/listaticket/listaticket.component';
import { TicketsComponent } from './Components/servicedesk/tickets/tickets.component';

const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'pmaker', component:ProcessmakerComponent},
  {path: 'serdesk', component:ServicedeskComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'cusuario', component:AdministracionComponent},
  {path: 'mtto', component:MantenimientoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'principalu', component:PrincipalusuarioComponent},
  {path: 'servicedesk', component:SdusuarioComponent},
  {path: 'listaticket', component:ListaticketComponent},
  {path: 'tickets', component:TicketsComponent},

  {path: '**', redirectTo: 'principal', pathMatch:'full'},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
