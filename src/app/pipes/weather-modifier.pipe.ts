import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weatherModifier'
})
export class WeatherModifierPipe implements PipeTransform {

  transform(resort: Resort, temperature: string): string {

    let t: number = +temperature;
    let weather: string = 'Loading';

    if (t > -30) weather = 'Very cold';
    if (t > -15) weather = 'Cold';
    if (t >= 0) weather = 'Cool';
    if (t > 15) weather = 'Freshly';
    if (t > 20) weather = 'Warm';
    if (t > 25) weather = 'Hot';
    if (t > 30) weather = 'Very hot';

    return weather;
  }

}
