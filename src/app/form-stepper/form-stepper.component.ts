import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoABButton, GoABFormStep, GoABFormStepper, GoABPages} from "@abgov/angular-components";
import {GoABFormStepperOnChangeDetail, GoABFormStepStatus} from "@abgov/ui-components-common";

@Component({
  selector: 'app-form-stepper',
  standalone: true,
  imports: [
    GoABFormStepper,
    GoABFormStep,
    GoABPages,
    GoABButton,
  ],
  templateUrl: './form-stepper.component.html',
  styleUrl: './form-stepper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormStepperComponent {
  freeStep = -1
  constrainedStep = 1;

  // controlled by the user based on form completion
  status: GoABFormStepStatus[] = ["complete", "complete", "incomplete"];

  updateFreeStep(event: GoABFormStepperOnChangeDetail) {
    console.log(event)
    this.freeStep = event.step;
  }

  setFreePage(page: number) {
    console.log("setting page..", page)
    if (page < 1 || page > 4) return;
    this.freeStep = page;
  }

  updateConstrainedStep(event: GoABFormStepperOnChangeDetail) {
    console.log(event)
    this.constrainedStep = event.step;
  }

  setConstrainedPage(page: number) {
    console.log("setting page..", page)
    if (page < 1 || page > 4) return;
    this.constrainedStep = page;
  }
}
