import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spanish-flashcards';
  cards = [
    { question: 'Hola!', answer: 'Hello' },
    { question: 'Como estas?', answer: 'How are you?' },
    { question: 'Buenos dias!', answer: 'Good morning' },
    { question: 'Me llamo es...', answer: 'My name is..' },
    { question: 'El autobus es amarillo', answer: 'The bus is yellow' },
    { question: 'La puerta', answer: 'The door' }
  ];
}
