import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




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
import { AdministracionComponent } from './Components/panel/administracion/administracion.component';
import { MantenimientoComponent } from './Components/panel/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    ServicedeskComponent,
    CabeceraComponent,
    NavbarComponent,
    ProcessmakerComponent,
    PanelComponent,
    AdministracionComponent,
    MantenimientoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
