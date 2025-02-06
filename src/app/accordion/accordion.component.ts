// import {GoABAccordion, GoABButton, GoABBadge} from '@abgov/angular-components';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  AccordionHideShowSectionExampleComponent
} from "./docs/accordion-hide-show-section-example.component";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionHideShowSectionExampleComponent],
  // imports: [GoABAccordion, GoABButton, GoABBadge],
  templateUrl: './accordion.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent {
  open = false;
  text: string;

  isReferralOpen = false;
  isContactInfoOpen = false;

  constructor() {
    this.text = "";
  }
  onClick() {
    this.open = !this.open;
  }
  ngOnInit() {
    setTimeout(() => this.text="Content is loaded from backend", 3000);
  }

  updateReferralAccordion(event: Event) {
    this.isReferralOpen = (event as CustomEvent).detail.open;
    this.isContactInfoOpen = false;
  }

  updateContactInfoAccordion(event: Event) {
    this.isContactInfoOpen = (event as CustomEvent).detail.open;
    this.isReferralOpen = false;
  }
}
