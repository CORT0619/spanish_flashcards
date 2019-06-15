import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss']
})
export class AddFlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addCard() {
    console.log('clicked');
  }

}
