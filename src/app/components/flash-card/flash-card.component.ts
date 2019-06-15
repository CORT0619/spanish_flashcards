import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
  animations: [
    trigger('spinCard', [state('showAnswer', style({ transform: '' }))])
  ]
})
export class FlashCardComponent implements OnInit {
  @Input() data: Array<Card>;
  currCard: Card;
  answerVisible = false;

  constructor() {}

  ngOnInit() {
    this.currCard = this.data[0];
  }
}
