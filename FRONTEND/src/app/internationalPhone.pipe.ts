import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'phoneNumber'
})

export class internationalPhonePipe implements PipeTransform{
    transform(value:number):number{
        return Number(("33"+value.toString().substring(1)).toString());
    }
}