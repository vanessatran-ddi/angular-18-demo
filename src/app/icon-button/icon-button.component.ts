import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABIconButton} from "@abgov/angular-components";

@Component({
  selector: 'app-icon-button',
  standalone: true,
  // imports: [ GoABIconButton,],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconButtonComponent {
  onClick() {
    console.log('clicked')
  }
}
