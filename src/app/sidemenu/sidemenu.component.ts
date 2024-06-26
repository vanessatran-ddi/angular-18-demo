import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABSideMenu, GoABSideMenuGroup, GoABSideMenuHeading} from "@abgov/angular-components";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  // imports: [
  //   GoABSideMenu,
  //   GoABSideMenuGroup,
  //   GoABSideMenuHeading,
  // ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidemenuComponent {

}
