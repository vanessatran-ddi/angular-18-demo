import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabButton, GoabButtonGroup} from "@abgov/angular-components";
import {ButtonDocsComponent} from "./docs/button-docs.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    GoabButton,
    GoabButtonGroup,
    ButtonDocsComponent
  ],
  templateUrl: './button.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  onClick() {
    console.log("clicked");
  }
}
