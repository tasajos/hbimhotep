import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProcessmakerComponent } from './Components/processmaker/processmaker.component';
import { PanelComponent } from './Components/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    ServicedeskComponent,
    CabeceraComponent,
    NavbarComponent,
    ProcessmakerComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
