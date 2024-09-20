import { Component } from '@angular/core';
import {GoabSideMenu, GoabSideMenuGroup, GoabSideMenuHeading} from "@abgov/angular-components";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ GoabSideMenu,
    GoabSideMenuGroup,
    GoabSideMenuHeading,],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

}
