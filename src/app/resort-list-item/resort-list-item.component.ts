import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Resorts} from "../resorts";

@Component({
  selector: 'app-resort-list-item',
  templateUrl: './resort-list-item.component.html',
  styleUrls: ['./resort-list-item.component.css']
})
export class ResortListItemComponent implements OnInit {

  @Input() data:Resorts;

  @Output() clicked:EventEmitter<Resorts> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  dispatchClick(){
    this.clicked.emit(this.data);
  }

}
