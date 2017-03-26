import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ngforNumber'
})
export class NgforNumberPipe implements PipeTransform {

  transform(value: number, res: number[]): number[] {
    res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }

}
