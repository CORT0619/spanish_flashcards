import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavDirection, Direction } from '@shared/models/nav-direction.model';

@Component({
  selector: 'nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.scss']
})
export class NavArrowComponent implements OnInit {

  currentElement = 0;
  @Input() navDirection: Direction;
  @Input() arr: any;
  @Output() go = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  goToCard() {
    this.go.emit(this.currentElement);
  }

  goBackward() {

  }
  goForward() {

  }
}
