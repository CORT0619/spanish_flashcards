import { TestBed } from '@angular/core/testing';

import { FlashcardNavService } from './flashcard-nav.service';
import { BehaviorSubject } from 'rxjs';

describe('FlashcardNavService', () => {
  const mockBehaviorSubject = new BehaviorSubject<number>(0);
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashcardNavService = TestBed.get(FlashcardNavService);
    expect(service).toBeTruthy();
  });

  describe('#setCurrentElement', () => {
    it('should call currentCardElement.next with the currElement', () => {
      const service: FlashcardNavService = TestBed.get(FlashcardNavService);
      service['currentCardElement'] = mockBehaviorSubject;
      spyOn(service['currentCardElement'], 'next');
      service.setCurrentElement(2);
      expect(service['currentCardElement'].next).toHaveBeenCalledWith(2);
    });
  });
});
