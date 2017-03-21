import {Component} from '@angular/core';
import {Resorts} from "./resorts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onResortItemClicked(event){
    this.actualResort = event;
  }

  public resortData: Resorts[] = [
    {
      id: 0,
      header: "First Resort",
      text1: "first resort",
      text2: "resort first",
      phone: "+1111 111 11 11",
      temperatureAir: "26",
      temperatureWater: "22",
      followers: "1111",
      following: "111",
    },
    {
      id: 1,
      header: "Second Resort",
      text1: "second resort",
      text2: "resort second",
      phone: "+2222 222 22 22",
      temperatureAir: "30",
      temperatureWater: "26",
      followers: "2222",
      following: "222",
    },
    {
      id: 2,
      header: "Third Resort",
      text1: "third resort",
      text2: "resort third",
      phone: "+3333 333 33 33",
      temperatureAir: "23",
      temperatureWater: "21",
      followers: "3333",
      following: "333",
    },
    {
      id: 3,
      header: "Fourth Resort",
      text1: "fourth resort",
      text2: "resort fourth",
      phone: "+4444 444 44 44",
      temperatureAir: "27",
      temperatureWater: "23",
      followers: "4444",
      following: "444",
    },
    {
      id: 4,
      header: "Fifth Resort",
      text1: "fifth resort",
      text2: "resort fifth",
      phone: "+5555 555 55 55",
      temperatureAir: "22",
      temperatureWater: "28",
      followers: "5555",
      following: "555",
    },
  ];

  public actualResort:Resorts = this.resortData[0];
}
