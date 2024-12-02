import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabBadge, GoabIcon} from "@abgov/angular-components";
import {BadgeDocsComponent} from "./docs/badge-docs.component";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    GoabBadge,
    GoabIcon,
    BadgeDocsComponent
  ],
  templateUrl: './badge.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgeComponent {
}
