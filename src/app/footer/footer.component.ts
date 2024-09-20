import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {GoabAppFooter, GoabAppFooterMetaSection, GoabAppFooterNavSection} from "@abgov/angular-components";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    GoabAppFooter,
    GoabAppFooterNavSection,
    GoabAppFooterMetaSection,
  ],
  templateUrl: './footer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {}
