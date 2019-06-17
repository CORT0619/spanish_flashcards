import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FlashcardNavService } from '@shared/services/flashcard-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
  animations: [
    trigger('spinCard', [state('showAnswer', style({ transform: '' }))])
  ]
})
export class FlashCardComponent implements OnInit, OnDestroy {
  currentElementSubscription: Subscription;
  @Input() data: Array<Card>;
  currCard: Card;
  answerVisible = false;

  constructor(private flashCardNavService: FlashcardNavService) {}

  ngOnInit() {
    this.currCard = this.data[0];
    this.currentElementSubscription = this.flashCardNavService.currentElement$.subscribe(
      currElement => {
        this.currCard = this.data[currElement];
      }
    );
  }

  ngOnDestroy() {
    if (this.currentElementSubscription) {
      this.currentElementSubscription.unsubscribe();
    }
  }
}
