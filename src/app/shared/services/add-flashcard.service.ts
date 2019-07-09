import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddFlashcardService {
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
}
