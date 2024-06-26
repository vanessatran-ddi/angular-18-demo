import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABAppHeader, GoABAppHeaderMenu} from "@abgov/angular-components";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // GoABAppHeader,
    // GoABAppHeaderMenu
  ],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  selectedMenu: string = "";
  constructor() {}
  selectMenu(text: string): void {
    this.selectedMenu = text;
  }
}
