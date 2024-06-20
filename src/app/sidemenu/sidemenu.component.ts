import { Component } from '@angular/core';
import {GoABSideMenu, GoABSideMenuGroup, GoABSideMenuHeading} from "@abgov/angular-components";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ GoABSideMenu,
    GoABSideMenuGroup,
    GoABSideMenuHeading,],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

}
