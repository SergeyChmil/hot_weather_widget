import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stars-rate',
  templateUrl: './stars-rate.component.html',
  styleUrls: ['./stars-rate.component.css']
})
export class StarsRateComponent {

  @Input()
  public date: Resort;

}
