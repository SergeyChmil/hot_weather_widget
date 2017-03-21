import {Component, OnInit, Input} from '@angular/core';
import {Resorts} from "../resorts";

@Component({
  selector: 'app-resort-list-item',
  templateUrl: './resort-list-item.component.html',
  styleUrls: ['./resort-list-item.component.css']
})
export class ResortListItemComponent implements OnInit {

  @Input() data:Resorts;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
