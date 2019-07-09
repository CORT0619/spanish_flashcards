import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashcardNavService } from '@shared/services/flashcard-nav.service';
import { Card } from '@shared/models/card.model';
import { AddFlashcardService } from '@shared/services/add-flashcard.service';
@Component({
  selector: 'cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.scss']
})
export class CardholderComponent implements OnInit, OnDestroy {
  currentElementSubscription: Subscription;
  currElement = 0;
  currCard: Card;
  cards = [
    { question: 'Hola!', answer: 'Hello' },
    { question: 'Como estas?', answer: 'How are you?' },
    { question: 'Buenos dias!', answer: 'Good morning' },
    { question: 'Me llamo es...', answer: 'My name is..' },
    { question: 'El autobus es amarillo', answer: 'The bus is yellow' },
    { question: 'La puerta', answer: 'The door' }
  ];

  constructor(
    private flashCardNavService: FlashcardNavService,
    private addFlashCardService: AddFlashcardService
  ) {}

  ngOnInit() {
    this.currentElementSubscription = this.flashCardNavService.currentElement$.subscribe(
      currElement => {
        this.currCard = this.cards[currElement];
      }
    );
  }

  // onNavigate(e) {}

  retrieveAllCards() {
    if (this.addFlashCardService.getCards) {
      // this.cards = [...this.addFlashCardService.getCards];
      const cards = this.addFlashCardService.getCards;
      cards.forEach(card => {
        this.cards.push(card);
      });
    }
  }

  retrieveActiveCard(e) {
    this.currElement = e;
    this.currCard = this.cards[e];
  }

  ngOnDestroy() {
    if (this.currentElementSubscription) {
      this.currentElementSubscription.unsubscribe();
    }
  }
}
