import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashcardModalComponent } from './add-flashcard-modal.component';

describe('AddFlashcardModalComponent', () => {
  let component: AddFlashcardModalComponent;
  let fixture: ComponentFixture<AddFlashcardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlashcardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlashcardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
