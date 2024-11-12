import {GoabAccordion, GoabButton, GoabBadge} from '@abgov/angular-components';
import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from "@angular/core";
import {AccordionModule} from "primeng/accordion";
import {CardModule} from "primeng/card";
import {MatFormField} from "@angular/material/form-field";
import {MatAccordion} from "@angular/material/expansion";
import {MatActionList} from "@angular/material/list";
import {AutoCompleteModule} from "primeng/autocomplete";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [GoabAccordion, GoabButton, GoabBadge, AccordionModule, CardModule, MatFormField, MatAccordion, MatActionList, AutoCompleteModule],
  templateUrl: './accordion.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent implements OnInit{
  open = false;
  content = "";

  accordionStatus = "Show all sections";

  onClick() {
    this.open = !this.open;
    this.accordionStatus = (this.open) ? "Hide all sections" : "Show all sections";
  }

  ngOnInit() {
    setTimeout(() => {
      this.content = "Content loaded!";
    }, 2000);
  }
}
