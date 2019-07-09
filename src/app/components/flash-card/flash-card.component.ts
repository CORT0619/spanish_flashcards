import {
  Component,
  OnInit,
  Input,
  // ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Card } from '@shared/models/card.model';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
  animations: [
    trigger('spinCard', [state('showAnswer', style({ transform: '' }))])
  ]
})
export class FlashCardComponent implements OnInit, OnChanges {
  @Input() currElement: Card;
  currCard: Card;
  answerVisible = false;

  constructor(/*private ref: ChangeDetectorRef*/) {
    // ref.detach();
    // setInterval(() => {
    //   ref.detectChanges();
    // }, 1000);
  }

  ngOnInit() {
    this.currCard = this.currElement;
  }

  ngOnChanges(change: SimpleChanges) {
    this.currCard = change.currElement.currentValue;
    this.answerVisible = false;
  }
}
