import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardholderComponent } from './cardholder.component';
import { NavArrowModule } from '@components/nav-arrow/nav-arrow.module';
import { FlashCardModule } from '@components/flash-card/flash-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CardholderComponent', () => {
  let component: CardholderComponent;
  let fixture: ComponentFixture<CardholderComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
