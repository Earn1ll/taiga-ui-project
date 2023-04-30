import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

const INCOME = {
  name: 'Income',
  items: [
      'Donations',
      'Product placement',
      'Sponsorship',
      'Found on the street',
      'Unexpected inheritance',
      'Investments',
      'Color copier',
  ],
};

const EXPENSES = {
  name: 'Expenses',
  items: [
      'Energy drinks',
      'Coffee',
      'Ramen',
      'Bills',
      'Back medicine',
      'Warhammer 40000 figurines',
  ],
};


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {
  readonly items = ['https://twitter.com/marsibarsi', 'https://twitter.com/waterplea'];
 
  readonly testForm = new FormGroup({
      email: new FormControl(null),
      signature: new FormControl(''),
  });

  
  signatureVisible = false;

  toggle(): void {
      this.signatureVisible = !this.signatureVisible;
  }


}
