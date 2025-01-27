import { Component } from "@angular/core";
import { GoabBadge, GoabContainer } from "@abgov/angular-components";

@Component({
  selector: 'app-badge-show-status-on-card-example',
  templateUrl: './badge-show-status-on-card-example.component.html',
  imports: [GoabContainer, GoabBadge],
  standalone: true,
})
export class BadgeShowStatusOnCardExampleComponent {}
