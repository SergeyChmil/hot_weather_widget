import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'resortsFilter'
})
export class ResortsFilterPipe implements PipeTransform {

  transform(resorts: Resort[], stars: number): Resort[] {
    if (!stars) return resorts;
    return resorts.filter((resort: Resort) => resort.stars === stars);
  }

}
