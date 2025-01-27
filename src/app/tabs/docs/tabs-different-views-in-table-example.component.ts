import { Component } from "@angular/core";
import { GoabBadge, GoabButton, GoabTab, GoabTable, GoabTabs } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-tabs-different-views-in-table-example',
  templateUrl: './tabs-different-views-in-table-example.component.html',
  imports: [GoabTabs, GoabTab, GoabTable, NgForOf, GoabBadge, GoabButton],
  standalone: true,
})
export class TabsDifferentViewsInTableExampleComponent {}
