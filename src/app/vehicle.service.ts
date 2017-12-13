import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {IVehicle} from './vehicle.interface';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService{

  constructor(private http: Http) { }
  
      getVehicles(): Observable<IVehicle[]> {
          return this.http.get('https://gist.githubusercontent.com/JyothsnaBoyina/20231084a8617f29487edb29d3d30737/raw/d6b6258e0a64bbd96e307b5c0b66f380f9100012/vehiclesdata.json')
              .map((response: Response) => <IVehicle[]>response.json())
              .catch(this.handleError);
      }
  
      handleError(error: Response) {
          console.error(error);
          return Observable.throw(error);
      }
}

