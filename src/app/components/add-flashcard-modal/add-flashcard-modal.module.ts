import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFlashcardModalComponent } from './add-flashcard-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddFlashcardModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddFlashcardModalComponent]
})
export class AddFlashcardModalModule {}
