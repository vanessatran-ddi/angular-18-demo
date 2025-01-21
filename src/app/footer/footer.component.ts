import { Component } from "@angular/core";
import {GoabAppFooter, GoabAppFooterMetaSection, GoabAppFooterNavSection} from "@abgov/angular-components";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    GoabAppFooter,
    GoabAppFooterNavSection,
    GoabAppFooterMetaSection,
    GoabAppFooterNavSection,
    GoabAppFooterNavSection,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
