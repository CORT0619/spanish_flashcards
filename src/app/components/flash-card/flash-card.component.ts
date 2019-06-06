import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  @Input() data: Array<Card>;
  currCard: Card;

  constructor() {}

  ngOnInit() {
    this.currCard = this.data[0];
  }
}
