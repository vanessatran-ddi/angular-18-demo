import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoABBadge, GoABIcon} from "@abgov/angular-components";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    GoABBadge,
    GoABIcon
  ],
  templateUrl: './badge.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgeComponent {
}
