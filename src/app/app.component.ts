import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {RESORTS, RESORT_DEFAULT, MENU} from "./resorts-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public resorts: Observable<Resort[]> = RESORTS;
  public actualResort: Resort = RESORT_DEFAULT;
  public menuItems: Observable<MenuItem[]> = MENU;

  public currentFilterIndex: number = null;

  public onResortItemClicked(event) {
    this.actualResort = event;
  }

  public onMenuButtonClicked(stars: number) {
    this.currentFilterIndex = stars;
  }

  public constructor() {
    this.resorts.subscribe((resorts: Resort[]) => {
      this.actualResort = resorts[0];
    })
  }

}
