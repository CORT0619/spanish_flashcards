import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.scss']
})
export class CardholderComponent implements OnInit {
  cards = [
    { question: 'Hola!', answer: 'Hello' },
    { question: 'Como estas?', answer: 'How are you?' },
    { question: 'Buenos dias!', answer: 'Good morning' },
    { question: 'Me llamo es...', answer: 'My name is..' },
    { question: 'El autobus es amarillo', answer: 'The bus is yellow' },
    { question: 'La puerta', answer: 'The door' }
  ];

  constructor() {}

  ngOnInit() {}

  onNavigate(e) {
    console.log('e ', e);
  }
}
