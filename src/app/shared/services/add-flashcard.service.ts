import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddFlashcardService {

  constructor() { }

  set addCard({ englishTranslation, spanishTranslation }) {
    const cards = JSON.parse(this.getCards);
    cards.push()
    // localStorage.setItem('', { englishTranslation, spanishTranslations});
  }

  get getCards() {
    return localStorage.getItem('cards');
  }
}
