import { Component } from "@angular/core";
import { GoabBadge, GoabButton, GoabTable } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";
import { GoabBadgeType } from "@abgov/ui-components-common";

@Component({
  selector: 'app-badge-show-status-table-example',
  templateUrl: './badge-show-status-table-example.component.html',
  imports: [GoabTable, NgForOf, GoabBadge, GoabButton],
  standalone: true,
})
export class BadgeShowStatusTableExampleComponent {
  badgeValues: {type: GoabBadgeType, content: string}[] = [
    {
      type: "important",
      content: "Pending",
    },
    {
      type: "emergency",
      content: "Failed",
    },
    {
      type: "success",
      content: "Complete",
    },
    {
      type: "information",
      content: "In progress",
    },
    {
      type: "midtone",
      content: "Closed",
    },
    {
      type: "success",
      content: "Complete",
    },
  ];
  onClick() {
    console.log("clicked");
  }
}
