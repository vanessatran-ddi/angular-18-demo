import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABButton, GoABButtonGroup} from "@abgov/angular-components";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    // GoABButton,
    // GoABButtonGroup
  ],
  templateUrl: './button.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  onClick() {
    console.log("clicked");
  }
}
