import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MaintainanceComponent } from './Maintainance/maintainance.component';
import { PropertyComponent } from './Property/property.component';
import { VehicleComponent } from './Vehicle/vehicle.component';
import { VehDataPipe } from './Vehicle/vehData.pipe';
import { UniquePipe } from './Vehicle/unique.pipe';

@NgModule({
  declarations: [
    AppComponent, MaintainanceComponent, PropertyComponent, VehicleComponent, VehDataPipe, UniquePipe,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
