import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardholderComponent } from './cardholder.component';
import { NavArrowModule } from '@components/nav-arrow/nav-arrow.module';
import { FlashCardModule } from '@components/flash-card/flash-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from '@shared/models/card.model';

describe('CardholderComponent', () => {
  let component: CardholderComponent;
  let fixture: ComponentFixture<CardholderComponent>;
  const cards: Array<Card> = [
    { question: 'Como is su pollo?', answer: 'How is your chicken?' },
    {
      question: 'El telefono es ocupado.',
      answer: 'The telephone is occupied.'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavArrowModule, FlashCardModule, BrowserAnimationsModule],
      declarations: [CardholderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.cards = cards;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#retrieveActiveCard', () => {
    it('should set currElement and currCard', () => {
      component.retrieveActiveCard(1);
      expect(component.currElement).toEqual(1);
      expect(component.currCard).toEqual(cards[1]);
    });
  });
});
