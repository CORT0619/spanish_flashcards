import { TestBed } from '@angular/core/testing';

import { AddFlashcardService } from './add-flashcard.service';

describe('AddFlashcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFlashcardService = TestBed.get(AddFlashcardService);
    expect(service).toBeTruthy();
  });
});
