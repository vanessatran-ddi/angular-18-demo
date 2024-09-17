import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
// import {GoABBadge, GoABTab, GoABTabs} from "@abgov/angular-components";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    // GoABTab,
    // GoABTabs,
    // GoABBadge,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsComponent implements OnInit {
  text: string;
  isReport = false;

  onClick() {
    this.isReport = true;
  }
  constructor() {
    this.text = "";
  }

  onChange(event: Event) {
    const customEvent = event as CustomEvent;
    const tabIndex = customEvent.detail.tab;
    console.log('Tab changed to ', tabIndex);
  }

  public ngOnInit() {
    setTimeout(() => this.text = "Dynamic content here", 3000);
  }
}
