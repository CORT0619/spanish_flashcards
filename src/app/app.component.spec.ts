import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardholderModule } from '@components/cardholder/cardholder.module';
import { AddFlashcardModule } from '@components/add-flashcard/add-flashcard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CardholderModule, AddFlashcardModule, BrowserAnimationsModule],
      declarations: [AppComponent],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spanish-flashcards'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('spanish-flashcards');
  });
});
