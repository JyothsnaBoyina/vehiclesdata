import { Component } from '@angular/core';
import { IVehicle } from '../vehicle.interface';
import { VehicleService } from '../vehicle.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})
export class VehicleComponent {
  title = 'Vehicle';
  startDate: Date;
  err_msg:string;
  endDate: Date;
  vehicles: IVehicle[];
  statusMessage: string;
  isExport: boolean = false;
  isExec: boolean = false;
  model: string;

  exclude: string;
  orderNo: string;
  sequence: number;
  msDate: string;
  eimPrefix: string;
  //model2: string;
  eimSuffix: string;
  dest: string;
  specRef: string;
  extrClr: string;
  intrClr: string;
  orderSource: string;
  glblDest: string;
  dealerNbr: string;
  buyer: string;
  orderClass: string;

  constructor(private _vehicleService: VehicleService) { }

  ngOnInit(): void {
    this._vehicleService.getVehicles()
      .subscribe(vehiclesData => this.vehicles = vehiclesData,
      error => {
        console.error(error);
        this.statusMessage = 'Problem with the service. Please try again after sometime';
      }
      );
  }

  onExport(): void {
    this.isExport = true;
    this.isExec = false;
    this.model = "";
    this.startDate = null;
    this.endDate = null;
    this.exclude = "";
    this.orderNo = "";
    //this.sequence: number;
    //this.msDate: string;
    this.eimPrefix = "";
    //this.model2="";
    this.eimSuffix = "";
    this.dest = "";
    this.specRef = "";
    this.extrClr = "";
    this.intrClr = "";
    this.orderSource = "";
    this.glblDest = "";
    this.dealerNbr = "";
    this.buyer = "";
    this.orderClass = "";
    this.err_msg="";
  }

  onCancel(): void {
    this.model = "";
    this.startDate = null;
    this.endDate = null;
    this.isExport = false;
    this.isExec = false;
    this.err_msg="";
  }

  clear(): void {
    this.isExport = false;
    this.isExec = false;
    this.err_msg="";
  }

  onExec(): void {
    this.isExec = true;
    this.isExport = false; 
    if(!this.model||!this.startDate||!this.endDate) {
      this.isExec = false;
      this.err_msg= "Please enter the data in mandatory fiels - model,startdate,enddate";
    }                                                                                                                                                                                                                                                                                                                                                                
    this.exclude = "";
    this.orderNo = "";
    //this.sequence: number;
    //this.msDate: string;
    this.eimPrefix = "";
    //this.model2="";
    this.eimSuffix = "";
    this.dest = "";
    this.specRef = "";
    this.extrClr = "";
    this.intrClr = "";
    this.orderSource = "";
    this.glblDest = "";
    this.dealerNbr = "";
    this.buyer = "";
    this.orderClass = "";
  }


}