import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABDivider} from "@abgov/angular-components";

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [
    // GoABDivider,
  ],
  templateUrl: './divider.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DividerComponent {
}
