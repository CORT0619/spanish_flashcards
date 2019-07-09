import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFlashcardService {
  private alertCardAdded: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  alertCardAddedSub$ = this.alertCardAdded.asObservable();

  constructor() {}

  set addCard({ englishTranslation, spanishTranslation }) {
    let cards = [];
    if (this.getCards) {
      cards = [...this.getCards];
    }

    cards.push({ englishTranslation, spanishTranslation });
    localStorage.setItem('cards', JSON.stringify(cards));
  }

  get getCards() {
    if (localStorage.getItem('cards')) {
      return JSON.parse(localStorage.getItem('cards'));
    }
    return false;
  }

  alertUpdateCards() {
    console.log('cards updated');
    this.alertCardAdded.next(true);
  }
}
