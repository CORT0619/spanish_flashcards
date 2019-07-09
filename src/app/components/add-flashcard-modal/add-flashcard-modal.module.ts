import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFlashcardModalComponent } from './add-flashcard-modal.component';

@NgModule({
  declarations: [AddFlashcardModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddFlashcardModalComponent
  ]
})
export class AddFlashcardModalModule { }
