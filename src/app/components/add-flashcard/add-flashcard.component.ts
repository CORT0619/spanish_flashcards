import { AddFlashcardModalComponent } from './../add-flashcard-modal/add-flashcard-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss']
})
export class AddFlashcardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.dialog.open(AddFlashcardModalComponent, {
      width: '250px'
    });
  }

  addCard() {
    console.log('clicked');
    this.openModal();
  }




}
