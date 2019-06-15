import { AddFlashcardComponent } from './add-flashcard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AddFlashcardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AddFlashcardComponent
  ]
})
export class AddFlashcardModule { }
