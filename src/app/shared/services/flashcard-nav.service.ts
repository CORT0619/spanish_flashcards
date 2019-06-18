import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardNavService {
  private currentCardElement: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  currentElement$ = this.currentCardElement.asObservable();

  constructor() {}

  setCurrentElement(currElement: number) {
    this.currentCardElement.next(currElement);
  }
}
