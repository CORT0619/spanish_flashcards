import { AddFlashcardModalComponent } from './../add-flashcard-modal/add-flashcard-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFlashcardService } from '@shared/services/add-flashcard.service';

@Component({
  selector: 'add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss']
})
export class AddFlashcardComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private addFlashcardService: AddFlashcardService
  ) {}

  ngOnInit() {}

  openModal() {
    this.dialog
      .open(AddFlashcardModalComponent, {
        width: '250px',
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {
        this.addFlashcardService.alertUpdateCards();
      });
  }

  addCard() {
    this.openModal();
  }
}
