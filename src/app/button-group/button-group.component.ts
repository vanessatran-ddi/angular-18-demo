import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABButton, GoABButtonGroup} from "@abgov/angular-components";

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [
    // GoABButton,
    // GoABButtonGroup
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
