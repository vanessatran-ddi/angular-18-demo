import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

@Component({
  selector: "app-accordion-hide-show-example",
  standalone: true,
  templateUrl: "./accordion-hide-show-section-example.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionHideShowSectionExampleComponent {
  expandedList: boolean[] = [false, false, false, false];
  expandedAll: boolean = false;
  accordionStatus = "Show all sections";

  toggleAccordion(index: number, event: Event): void {
    this.expandedList[index] = (event as CustomEvent).detail.open;
    this.updateAccordionStatus();
  }

  onClick(): void {
    const isExpanding = this.expandedList.some(isOpen => !isOpen)
    this.expandedList = this.expandedList.map(() => isExpanding);
    this.updateAccordionStatus();
  }

  private updateAccordionStatus(): void {
    this.expandedAll = this.expandedList.every(isOpen => isOpen);
    this.accordionStatus = this.expandedList.every(isOpen => isOpen) ? "Hide all sections" : "Show all sections";
  }
}
