import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Direction } from '@shared/models/nav-direction.model';

@Component({
  selector: 'nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.scss']
})
export class NavArrowComponent implements OnInit {
  @Input() navDirection: Direction;
  @Input() length: number;
  @Input() currElement: number;
  @Output() go = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  goBackward() {
    let currCard = this.currElement;
    if (this.length && currCard !== 0) {
      currCard--;
      this.go.emit(currCard);
    }
  }

  goForward() {
    let currCard = this.currElement;
    if (this.length && currCard < this.length - 1) {
      currCard++;
      this.go.emit(currCard);
    }
  }
}
