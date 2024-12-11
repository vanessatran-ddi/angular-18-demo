import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabButton, GoabDivider, GoabFormStep, GoabFormStepper, GoabPages} from "@abgov/angular-components";
import {GoabFormStepperOnChangeDetail, GoabFormStepStatus} from "@abgov/ui-components-common";
import {FormStepperSandboxComponent} from "./docs/form-stepper-sandbox.component";
import {
  FormStepperControlledNavigationExampleComponent
} from "./docs/form-stepper-controlled-navigation-example.component";
import {
  FormStepperStepStatusExampleComponent
} from "./docs/form-stepper-step-status-example.component";

@Component({
  selector: 'app-form-stepper',
  standalone: true,
  imports: [
    GoabFormStepper,
    GoabFormStep,
    GoabPages,
    GoabButton,
    FormStepperSandboxComponent,
    GoabDivider,
    FormStepperControlledNavigationExampleComponent,
    FormStepperStepStatusExampleComponent,
  ],
  templateUrl: './form-stepper.component.html',
  styleUrl: './form-stepper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormStepperComponent {
  freeStep = -1
  constrainedStep = 1;

  // controlled by the user based on form completion
  status: GoabFormStepStatus[] = ["complete", "complete", "incomplete"];

  updateFreeStep(event: GoabFormStepperOnChangeDetail) {
    console.log(event)
    this.freeStep = event.step;
  }

  setFreePage(page: number) {
    console.log("setting page..", page)
    if (page < 1 || page > 4) return;
    this.freeStep = page;
  }

  updateConstrainedStep(event: GoabFormStepperOnChangeDetail) {
    console.log(event)
    this.constrainedStep = event.step;
  }

  setConstrainedPage(page: number) {
    console.log("setting page..", page)
    if (page < 1 || page > 4) return;
    this.constrainedStep = page;
  }
}
