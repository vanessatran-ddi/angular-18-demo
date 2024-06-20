import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoABAppFooter, GoABAppFooterNavSection } from "@abgov/angular-components";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    GoABAppFooter,
    GoABAppFooterNavSection,
  ],
  templateUrl: './footer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {}
