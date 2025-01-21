import { Component } from '@angular/core';
import { GoabDivider, GoabSideMenu, GoabSideMenuGroup, GoabSideMenuHeading } from "@abgov/angular-components";
import { SideMenuSandboxComponent } from "./docs/side-menu-sandbox.component";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    GoabSideMenu,
    GoabSideMenuGroup,
    GoabSideMenuHeading,
    SideMenuSandboxComponent,
    GoabDivider,
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {}
