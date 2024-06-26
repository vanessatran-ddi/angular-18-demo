// import {GoABAccordion, GoABButton, GoABBadge} from '@abgov/angular-components';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-accordion',
  standalone: true,
  // imports: [GoABAccordion, GoABButton, GoABBadge],
  templateUrl: './accordion.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent {
  open = false;
  text: string;

  constructor() {
    this.text = "";
  }
  onClick() {
    this.open = !this.open;
  }
  ngOnInit() {
    setTimeout(() => this.text="Content is loaded from backend", 3000);
  }
}
