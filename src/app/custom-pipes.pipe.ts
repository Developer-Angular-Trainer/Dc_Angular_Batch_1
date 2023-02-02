import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value:any): any {
    console.log('custom pipe is calling for doubling the value')
    return value *value ;
  }

}
