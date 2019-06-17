import { TestBed } from '@angular/core/testing';

import { FlashcardNavService } from './flashcard-nav.service';

describe('FlashcardNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashcardNavService = TestBed.get(FlashcardNavService);
    expect(service).toBeTruthy();
  });
});
