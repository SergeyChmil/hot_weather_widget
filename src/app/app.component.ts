import {Component} from '@angular/core';
import {Resorts} from "./resorts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public resortData: Resorts[] = [
    {
      mainImageURL: "src/images/res.jpg",
      weatherImageURL: "src/images/r1.jpg",
      header: "First Resort",
      text1: "first resort",
      text2: "resort first",
      phone: "+1111 111 11 11",
      temperatureAir: 26,
      temperatureWater: 22,
      followers: 1111,
      following: 111,
    },
    {
      mainImageURL: "src/images/res.jpg",
      weatherImageURL: "src/images/r1.jpg",
      header: "Second Resort",
      text1: "second resort",
      text2: "resort second",
      phone: "+2222 222 22 22",
      temperatureAir: 30,
      temperatureWater: 26,
      followers: 2222,
      following: 222,
    },
    {
      mainImageURL: "src/images/res.jpg",
      weatherImageURL: "src/images/r1.jpg",
      header: "Third Resort",
      text1: "third resort",
      text2: "resort third",
      phone: "+3333 333 33 33",
      temperatureAir: 23,
      temperatureWater: 21,
      followers: 3333,
      following: 333,
    },
    {
      mainImageURL: "src/images/res.jpg",
      weatherImageURL: "src/images/r1.jpg",
      header: "Fourth Resort",
      text1: "fourth resort",
      text2: "resort fourth",
      phone: "+4444 444 44 44",
      temperatureAir: 27,
      temperatureWater: 23,
      followers: 4444,
      following: 444,
    },
    {
      mainImageURL: "src/images/res.jpg",
      weatherImageURL: "src/images/r1.jpg",
      header: "Fifth Resort",
      text1: "fifth resort",
      text2: "resort fifth",
      phone: "+1111 111 11 11",
      temperatureAir: 22,
      temperatureWater: 28,
      followers: 5555,
      following: 555,
    },
  ]
    ;
}
