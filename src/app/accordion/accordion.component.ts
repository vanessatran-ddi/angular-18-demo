import {GoABAccordion, GoABButton, GoABBadge, GoABAccordionHeadingContent} from '@abgov/angular-components';
import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from "@angular/core";
import {AccordionModule} from "primeng/accordion";
import {CardModule} from "primeng/card";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [GoABAccordion, GoABButton, GoABBadge, AccordionModule, CardModule, MatFormField, GoABAccordionHeadingContent],
  templateUrl: './accordion.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent implements OnInit{
  open = false;
  content = "";
  onClick() {
    this.open = !this.open;
  }
  ngOnInit() {
    setTimeout(() => {
      this.content = "Content loaded!";
    }, 2000);
  }
}
