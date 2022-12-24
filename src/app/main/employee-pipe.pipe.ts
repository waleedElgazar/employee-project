import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(value: string,len:number): unknown {
    if (value.length>len){
      value=value.slice(0,len)+"..."
    }
    return value;
  }

}
