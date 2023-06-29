import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProcessmakerComponent } from './Components/processmaker/processmaker.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    ServicedeskComponent,
    CabeceraComponent,
    NavbarComponent,
    ProcessmakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
