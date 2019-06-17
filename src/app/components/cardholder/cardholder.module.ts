import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardholderComponent } from './cardholder.component';
import { NavArrowModule } from '@components/nav-arrow/nav-arrow.module';
import { FlashCardModule } from '@components/flash-card/flash-card.module';

@NgModule({
  declarations: [CardholderComponent],
  imports: [CommonModule, NavArrowModule, FlashCardModule],
  exports: [CardholderComponent]
})
export class CardholderModule {}
