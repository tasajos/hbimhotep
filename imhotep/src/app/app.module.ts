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
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


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
import { LoginComponent } from './Components/login/login.component';
import { NavbarusuarioComponent } from './Components/navbarusuario/navbarusuario.component';
import { PrincipalusuarioComponent } from './Components/principalusuario/principalusuario.component';
import { SdusuarioComponent } from './Components/servicedesk/sdusuario/sdusuario.component';
import { ListaticketComponent } from './Components/servicedesk/listaticket/listaticket.component';
import { TicketsComponent } from './Components/servicedesk/tickets/tickets.component';
import { EticketComponent } from './Components/servicedesk/tickets/eticket/eticket.component';
import { VticketComponent } from './Components/servicedesk/tickets/vticket/vticket.component';

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
    MantenimientoComponent,
    LoginComponent,
    NavbarusuarioComponent,
    PrincipalusuarioComponent,
    SdusuarioComponent,
    ListaticketComponent,
    TicketsComponent,
    EticketComponent,
    VticketComponent


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
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
