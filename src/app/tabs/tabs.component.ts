import { Component } from '@angular/core';
import {GoABBadge, GoABTab, GoABTabs} from "@abgov/angular-components";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    GoABTab,
    GoABTabs,
    GoABBadge,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
