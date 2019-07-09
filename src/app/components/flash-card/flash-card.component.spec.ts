import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashCardComponent } from './flash-card.component';
import { Card } from '@shared/models/card.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FlashCardComponent', () => {
  let component: FlashCardComponent;
  let fixture: ComponentFixture<FlashCardComponent>;
  const cards: Array<Card> = [
    { question: 'Como is su pollo?', answer: 'How is your chicken?' },
    {
      question: 'El telefono es ocupado.',
      answer: 'The telephone is occupied.'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [FlashCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardComponent);
    component = fixture.componentInstance;
    component.currElement = cards[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.currCard).toEqual(cards[0]);
  });
});
