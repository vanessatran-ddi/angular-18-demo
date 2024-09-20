import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabButton, GoabButtonGroup} from "@abgov/angular-components";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    GoabButton,
    GoabButtonGroup
  ],
  templateUrl: './button.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  onClick() {
    console.log("clicked");
  }
}
