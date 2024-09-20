import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabButton, GoabButtonGroup} from "@abgov/angular-components";

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [
    GoabButton,
    GoabButtonGroup
  ],
  templateUrl: './button-group.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonGroupComponent {
  constructor() { }

  onClick() {
    console.log("clicked");
  }
}
