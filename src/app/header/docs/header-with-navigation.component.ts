import {Component} from "@angular/core";
import {GoabAppHeader, GoabAppHeaderMenu, GoabMicrositeHeader} from "@abgov/angular-components";

@Component({
  selector: "app-header-with-navigation",
  standalone: true,
  imports: [
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppHeaderMenu
  ],
  templateUrl: "./header-with-navigation.component.html"
})
export class HeaderWithNavigationComponent {

}
