import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardComponent } from './flash-card.component';

@NgModule({
  declarations: [FlashCardComponent],
  imports: [
    CommonModule
  ],
  exports: [FlashCardComponent]
})
export class FlashCardModule { }
