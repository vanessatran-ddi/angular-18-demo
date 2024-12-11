import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabAppHeader, GoabAppHeaderMenu, GoabDivider} from "@abgov/angular-components";
import {HeaderWithNavigationComponent} from "./docs/header-with-navigation.component";
import {HeaderWithMenuClickEventComponent} from "./docs/header-with-menu-click-event.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GoabAppHeader,
    GoabAppHeaderMenu,
    HeaderWithNavigationComponent,
    GoabDivider,
    HeaderWithMenuClickEventComponent
  ],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

}
