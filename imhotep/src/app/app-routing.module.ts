import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';
import { ProcessmakerComponent } from './Components/processmaker/processmaker.component';

const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'sdesk', component:ServicedeskComponent},
  {path: 'pmaker', component:ProcessmakerComponent},

  {path: '**', redirectTo: 'principal', pathMatch:'full'},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
