import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { GoABButton, GoABDetails } from "@abgov/angular-components";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    GoABDetails,
    GoABButton,
  ],
  templateUrl: './detail.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailComponent {
  isOpen1 = true;
  constructor() { }
  toggle() {
    this.isOpen1 = !this.isOpen1;
  }
}
