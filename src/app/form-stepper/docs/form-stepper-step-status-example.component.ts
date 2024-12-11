import {Component} from "@angular/core";
import {GoabButton, GoabFormStep, GoabFormStepper, GoabPages} from "@abgov/angular-components";
import {GoabFormStepperOnChangeDetail, GoabFormStepStatus} from "@abgov/ui-components-common";

@Component({
  selector: "app-form-stepper-step-status-example",
  standalone: true,
  imports: [
    GoabFormStepper,
    GoabFormStep,
    GoabPages,
    GoabButton
  ],
  templateUrl: "./form-stepper-step-status-example.component.html"
})
export class FormStepperStepStatusExampleComponent {
  step = -1;
  // controlled by the user based on form completion
  status: GoabFormStepStatus[] = ["complete", "complete", "incomplete", "incomplete"]
  updateStep(event: GoabFormStepperOnChangeDetail) {
    this.step = event.step;
  }
  setPage(page: number) {
    if (page < 1 || page > 4) return;
    this.step = page
  }
}
