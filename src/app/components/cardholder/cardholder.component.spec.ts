import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  ComponentFixtureAutoDetect
} from '@angular/core/testing';

import { CardholderComponent } from './cardholder.component';
import { NavArrowModule } from '@components/nav-arrow/nav-arrow.module';
import { FlashCardModule } from '@components/flash-card/flash-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from '@shared/models/card.model';

describe('CardholderComponent', () => {
  let component: CardholderComponent;
  let fixture: ComponentFixture<CardholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavArrowModule, FlashCardModule, BrowserAnimationsModule],
      declarations: [CardholderComponent]
      // providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#retrieveActiveCard', () => {
    it('should set currElement and currCard', () => {
      component.retrieveActiveCard(1);
      expect(component.currElement).toEqual(1);
      expect(component.currCard).toEqual(component.cards[1]);
    });
  });

  describe('#click navArrow', () => {
    it('should show the next flashcard', async(() => {
      const cardHolder: HTMLElement = fixture.debugElement.nativeElement;
      fixture.detectChanges();
      const flashcard = cardHolder.querySelector('flash-card');
      const question = flashcard.querySelector(
        '.flashcard__card.flashcard__question'
      );
      expect(question.textContent).toEqual('Hola!');
      const [leftArrow, rightArrow]: Array<HTMLElement> = Array.from(
        cardHolder.querySelectorAll('nav-arrow')
      );
      rightArrow.dispatchEvent(new Event('click'));
      // rightArrow.click();

      return fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(question.textContent).toEqual('Como estas?');
      });
    }));
  });
});
