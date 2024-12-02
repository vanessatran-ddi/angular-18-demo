import {Component} from "@angular/core";
import {GoabBadge, GoabDivider} from "@abgov/angular-components";

@Component({
  selector: "app-badge-docs",
  standalone: true,
  imports: [
    GoabBadge,
    GoabDivider,
  ],
  templateUrl: './badge-docs.component.html'
})
export class BadgeDocsComponent {

}
