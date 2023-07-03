import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';
import { ProcessmakerComponent } from './Components/processmaker/processmaker.component';
import { PanelComponent } from './Components/panel/panel.component';
import { AdministracionComponent } from './Components/panel/administracion/administracion.component';
import { MantenimientoComponent } from './Components/panel/mantenimiento/mantenimiento.component';

const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'pmaker', component:ProcessmakerComponent},
  {path: 'serdesk', component:ServicedeskComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'cusuario', component:AdministracionComponent},
  {path: 'mtto', component:MantenimientoComponent},

  {path: '**', redirectTo: 'principal', pathMatch:'full'},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
