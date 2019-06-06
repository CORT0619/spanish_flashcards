import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlashCardModule } from './components/flash-card/flash-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlashCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
