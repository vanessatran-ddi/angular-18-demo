import { Component } from '@angular/core';
import {GoabBadge, GoabTab, GoabTabs} from "@abgov/angular-components";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    GoabTab,
    GoabTabs,
    GoabBadge,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
