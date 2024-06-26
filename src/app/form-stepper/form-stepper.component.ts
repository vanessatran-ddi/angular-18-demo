import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABButton, GoABFormStep, GoABFormStepper, GoABPages} from "@abgov/angular-components";
// import {GoABFormStepperOnChangeDetail, GoABFormStepStatus} from "@abgov/ui-components-common";

@Component({
  selector: 'app-form-stepper',
  standalone: true,
  imports: [
    // GoABFormStepper,
    // GoABFormStep,
    // GoABPages,
    // GoABButton,
  ],
  templateUrl: './form-stepper.component.html',
  styleUrl: './form-stepper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormStepperComponent {
  step = 2;
  // controlled by the user based on form completion
  status = ["complete", "complete", "incomplete", "incomplete"];
  updateStep(event: Event) {
    this.step = (event as CustomEvent).detail.step;
  }
  setPage(page: number) {
    if (page < 1 || page > 4) return;
    this.step = page;
  }
}
