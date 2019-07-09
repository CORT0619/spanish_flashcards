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
  cardAddedSubscription: Subscription;
  currElement = 0;
  currCard: Card;
  cards = [
    { spanishTranslation: 'Hola!', englishTranslation: 'Hello' },
    { spanishTranslation: 'Como estas?', englishTranslation: 'How are you?' },
    { spanishTranslation: 'Buenos dias!', englishTranslation: 'Good morning' },
    {
      spanishTranslation: 'Me llamo es...',
      englishTranslation: 'My name is..'
    },
    {
      spanishTranslation: 'El autobus es amarillo',
      englishTranslation: 'The bus is yellow'
    },
    { spanishTranslation: 'La puerta', englishTranslation: 'The door' }
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

    this.cardAddedSubscription = this.addFlashCardService.alertCardAddedSub$.subscribe(
      () => {
        this.retrieveAllCards();
        this.currCard = this.cards[this.cards.length - 1];
        this.currElement = this.cards.length - 1;
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

    if (this.cardAddedSubscription) {
      this.cardAddedSubscription.unsubscribe();
    }
  }
}
