import { Pipe, PipeTransform } from '@angular/core';
import { IVehicle } from '../vehicle.interface';

@Pipe({
    name: 'filter'
})
export class VehDataPipe implements PipeTransform {
    veh: IVehicle[];
    i: number = 0;
    transform(items: IVehicle[], model: string, start: Date, end: Date,
        exclude: string,
        orderNo: string,
        sequence: number,
        msDate: string,
        eimPrefix: string,
        eimSuffix: string,
        dest: string,
        specRef: string,
        extrClr: string,
        intrClr: string,
        orderSource: string,
        glblDest: string,
        dealerNbr: string,
        buyer: string,
        orderClass: string): IVehicle[] {

        // if (!model && !start && !end) {
        //     return items;
        // }
        // return items.filter(item => item.model.indexOf(model) !== -1 && item.msDate > start && item.msDate < end);

        if (items && items.length) {
            return items.filter(item => {
                if (model && item.model.indexOf(model) === -1) {
                    return false;
                }
                if (start && !(item.msDate > start)) {
                    return false;
                }
                if (end && !(item.msDate < end)) {
                    return false;
                }
                if (exclude && item.exclude.indexOf(exclude) === -1) {
                    return false;
                }
                if (orderNo && item.orderNo.indexOf(orderNo) === -1) {
                    return false;
                }
                // if (sequence && item.sequence.indexOf(sequence) === -1){
                //     return false;
                // }

                if (eimPrefix && item.eimPrefix.indexOf(eimPrefix) === -1) {
                    return false;
                }
                if (eimSuffix && item.eimSuffix.indexOf(eimSuffix) === -1) {
                    return false;
                }
                if (dest && item.dest.indexOf(dest) === -1) {
                    return false;
                }
                if (specRef && item.specRef.indexOf(specRef) === -1) {
                    return false;
                }
                if (extrClr && item.extrClr.indexOf(extrClr) === -1) {
                    return false;
                }
                if (intrClr && item.intrClr.indexOf(intrClr) === -1) {
                    return false;
                }
                if (orderSource && item.orderSource.indexOf(orderSource) === -1) {
                    return false;
                }
                if (glblDest && item.glblDest.indexOf(glblDest) === -1) {
                    return false;
                }
                if (dealerNbr && item.dealerNbr.indexOf(dealerNbr) === -1) {
                    return false;
                }
                if (buyer && item.buyer.indexOf(buyer) === -1) {
                    return false;
                }
                if (orderClass && item.orderClass.indexOf(orderClass) === -1) {
                    return false;
                }
                return true;
            })
        }
        else {
            return items;
        }
    }
}