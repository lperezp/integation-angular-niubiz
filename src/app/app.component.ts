import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product = {
    description: 'Artículo XYZ',
    amount: 35,
  };

  constructor() {
  }

  ngOnInit() {
  }

  payment() {
    };
  }
