import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-resort-list-item',
  templateUrl: './resort-list-item.component.html',
  styleUrls: ['./resort-list-item.component.css'],
})
export class ResortListItemComponent {

  @Input()
  public data: Resort;

  @Output()
  public clicked: EventEmitter<Resort> = new EventEmitter();

  dispatchClick() {
    this.clicked.emit(this.data);
  }

}
