import { Component } from "@angular/core";
import { GoabSideMenu, GoabSideMenuGroup, GoabSideMenuHeading } from "@abgov/angular-components";

@Component({
  selector: 'app-side-menu-sandbox',
  templateUrl: './side-menu-sandbox.component.html',
  imports: [GoabSideMenu, GoabSideMenuHeading, GoabSideMenuGroup],
  standalone: true,
})
export class SideMenuSandboxComponent {}
