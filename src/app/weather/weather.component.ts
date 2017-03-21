import {Component, OnInit, Input} from '@angular/core';
import {Resorts} from "../resorts";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() data:Resorts;

  constructor() { }

  ngOnInit() {
  }

}
