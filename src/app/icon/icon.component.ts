import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABIcon} from "@abgov/angular-components";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    // GoABIcon
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent {

}
