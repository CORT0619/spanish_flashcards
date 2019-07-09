import { Component, OnInit } from '@angular/core';
import { AddFlashcardService } from '@shared/services/add-flashcard.service';

@Component({
  selector: 'add-flashcard-modal',
  templateUrl: './add-flashcard-modal.component.html',
  styleUrls: ['./add-flashcard-modal.component.scss']
})
export class AddFlashcardModalComponent implements OnInit {

  constructor(
    private addFlashCardService: AddFlashcardService
  ) { }

  ngOnInit() {
  }

  addTranslation() {
    
  }

}
