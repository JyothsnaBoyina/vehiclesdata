import { Pipe, PipeTransform } from '@angular/core';
import { IVehicle } from '../vehicle.interface';
import * as _ from 'lodash';

@Pipe({
    name: 'unique',
    pure: false
})

export class UniquePipe implements PipeTransform {
    transform(items: IVehicle[]): IVehicle[] {
        if (items !== undefined && items !== null) {
            return _.uniqBy(items, 'model');
        }
        return items;
    }
}