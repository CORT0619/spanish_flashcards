import { AddFlashcardModalModule } from './../add-flashcard-modal/add-flashcard-modal.module';
import { AddFlashcardComponent } from './add-flashcard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddFlashcardModalComponent } from '@components/add-flashcard-modal/add-flashcard-modal.component';

@NgModule({
  declarations: [AddFlashcardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    AddFlashcardModalModule
  ],
  exports: [AddFlashcardComponent],
  entryComponents: [AddFlashcardModalComponent]
})
export class AddFlashcardModule {}
