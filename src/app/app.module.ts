import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFlashcardModule } from './components/add-flashcard/add-flashcard.module';
import { CardholderModule } from '@components/cardholder/cardholder.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AddFlashcardModule,
    CardholderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
