import { Component } from "@angular/core";
import { GoabBadge, GoabButton, GoabTab, GoabTable, GoabTabs } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-tabs-specific-tab-active-example',
  templateUrl: './tabs-sepcific-tab-active-example.component.html',
  imports: [GoabTabs, GoabTab, GoabTable, NgForOf, GoabBadge, GoabButton],
  standalone: true,
})
export class TabsSepcificTabActiveExampleComponent {}
