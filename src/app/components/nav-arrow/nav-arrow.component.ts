import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Direction } from '@shared/models/nav-direction.model';
import { FlashcardNavService } from '@shared/services/flashcard-nav.service';

@Component({
  selector: 'nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.scss']
})
export class NavArrowComponent implements OnInit {
  // currentElement = 0;
  @Input() navDirection: Direction;
  @Input() length: number;
  @Input() currElement: number;
  @Output() go = new EventEmitter<number>();

  constructor(/*private flashCardNavService: FlashcardNavService*/) {}

  ngOnInit() {}

  // goToCard() {
  //   this.go.emit(this.currentElement);
  // }

  goBackward() {
    let currCard = this.currElement;
    // console.log('this.currentElement ', this.currentElement);
    console.log('currCard ', currCard);
    if (this.length && /*this.currentElement*/ currCard !== 0) {
      // this.currentElement--;
      currCard--;
      console.log('currCard ', currCard);
      this.go.emit(currCard);
      // this.go.emit(this.currentElement);
      // this.flashCardNavService.setCurrentElement(this.currentElement);
    }
  }

  goForward() {
    let currCard = this.currElement;
    // console.log('this.currentElement before ', this.currentElement);
    if (this.length && /*this.currentElement*/ currCard < this.length - 1) {
      // this.currentElement++;
      currCard++;
      console.log('currCard ', currCard);
      // this.go.emit(this.currentElement);
      this.go.emit(currCard);
      // this.flashCardNavService.setCurrentElement(this.currentElement);
    }
  }
}
