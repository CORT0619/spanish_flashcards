import { Component, OnInit } from '@angular/core';
import { AddFlashcardService } from '@shared/services/add-flashcard.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-flashcard-modal',
  templateUrl: './add-flashcard-modal.component.html',
  styleUrls: ['./add-flashcard-modal.component.scss']
})
export class AddFlashcardModalComponent implements OnInit {
  flashCardForm = this.fb.group({
    englishTranslation: ['', Validators.required],
    spanishTranslation: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private addFlashCardService: AddFlashcardService,
    public dialogRef: MatDialogRef<AddFlashcardModalComponent>
  ) {}

  ngOnInit() {}

  addTranslation() {
    const englishTranslation = this.flashCardForm.get('englishTranslation')
      .value;
    const spanishTranslation = this.flashCardForm.get('spanishTranslation')
      .value;

    this.addFlashCardService.addCard = {
      englishTranslation,
      spanishTranslation
    };

    this.dialogRef.close();
  }
}
