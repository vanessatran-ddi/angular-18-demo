import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabAppHeader, GoabAppHeaderMenu} from "@abgov/angular-components";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GoabAppHeader,
    GoabAppHeaderMenu
  ],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

}
