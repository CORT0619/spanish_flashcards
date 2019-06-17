import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
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
  @Input() currElement: Card;
  currCard: Card;
  answerVisible = false;

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      ref.detectChanges();
    }, 5000);
  }

  ngOnInit() {
    this.currCard = this.currElement;
    console.log('this.currCard ', this.currCard);
  }
}
