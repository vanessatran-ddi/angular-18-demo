import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabBadge, GoabIcon} from "@abgov/angular-components";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    GoabBadge,
    GoabIcon
  ],
  templateUrl: './badge.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgeComponent {
}
