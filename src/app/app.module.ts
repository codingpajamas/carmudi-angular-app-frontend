import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { VehicleService } from './_services/vehicle.service';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './_pages/vehicles/vehicles.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: VehiclesComponent
      }
    ]),
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
  	VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
