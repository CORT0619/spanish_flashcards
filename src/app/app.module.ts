import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlashCardModule } from './components/flash-card/flash-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFlashcardModule } from './components/add-flashcard/add-flashcard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlashCardModule,
    BrowserAnimationsModule,
    AddFlashcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
