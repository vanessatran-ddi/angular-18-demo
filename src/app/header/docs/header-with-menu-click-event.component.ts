import {Component} from "@angular/core";
import {GoabAppHeader, GoabAppHeaderMenu, GoabRadioGroup, GoabRadioItem} from "@abgov/angular-components";
import {GoabRadioGroupOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-header-with-menu-click-event",
  standalone: true,
  imports: [
    GoabRadioGroup,
    GoabRadioItem,
    GoabAppHeader,
    GoabAppHeaderMenu
  ],
  templateUrl: "./header-with-menu-click-event.component.html"
})
export class HeaderWithMenuClickEventComponent {
  deviceWidth = 5000;
  changeDeviceWidth(event: GoabRadioGroupOnChangeDetail) {
    this.deviceWidth = +event.value;
  }

  handleMenuClick() {
    alert("Menu not being displayed and you can do anything");
  }
}
