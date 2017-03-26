import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs";

export const MENU: Observable<MenuItem[]> = Observable.of([
  {title: "All", stars: null},
  {title: "5 stars", stars: 5},
  {title: "4 stars", stars: 4},
  {title: "3 stars", stars: 3},
  {title: "Hostels", stars: 2}
]);

export const RESORTS: Observable<Resort[]> = Observable.of([
  {
    id: 0,
    header: "Lightkeeper Inn",
    text1: "Seaside hotel",
    text2: "Nice and picturesque",
    phone: "+1111 111 11 11",
    temperatureAir: "26",
    temperatureWater: "22",
    followers: "1111",
    following: "111",
    stars: 5
  },
  {
    id: 1,
    header: "Lumberjack's cabin",
    text1: "Cabin in jungle",
    text2: "Quiet and cozy",
    phone: "+2222 222 22 22",
    temperatureAir: "30",
    temperatureWater: "26",
    followers: "2222",
    following: "222",
    stars: 2
  },
  {
    id: 2,
    header: "Alpian Paradise",
    text1: "Best view",
    text2: "Sunsets and mountains",
    phone: "+3333 333 33 33",
    temperatureAir: "23",
    temperatureWater: "21",
    followers: "3333",
    following: "333",
    stars: 2
  },
  {
    id: 3,
    header: "Pinky shark",
    text1: "Bungalow resort",
    text2: "Beach and cocktails",
    phone: "+4444 444 44 44",
    temperatureAir: "27",
    temperatureWater: "23",
    followers: "4444",
    following: "444",
    stars: 3
  },
  {
    id: 4,
    header: "Nagato's village",
    text1: "Hi-Tech village",
    text2: "Smart houses",
    phone: "+5555 555 55 55",
    temperatureAir: "22",
    temperatureWater: "28",
    followers: "5555",
    following: "555",
    stars: 4
  }
]).delay(2000);

export const RESORT_DEFAULT: Resort = {
  id: -1,
  header: "Loading...",
  text1: "loading...",
  text2: "loading...",
  phone: "",
  temperatureAir: "-",
  temperatureWater: "-",
  followers: "-",
  following: "-",
  stars: 0
}
