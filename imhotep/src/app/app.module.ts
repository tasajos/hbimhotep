import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ServicedeskComponent } from './Components/servicedesk/servicedesk.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    ServicedeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
