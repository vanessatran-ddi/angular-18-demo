import {Component} from "@angular/core";
import {GoabFormStepperOnChangeDetail} from "@abgov/ui-components-common";
import {GoabFormStep, GoabFormStepper, GoabPages} from "@abgov/angular-components";

@Component({
  standalone: true,
  selector: "app-form-stepper-sandbox",
  imports: [
    GoabFormStepper,
    GoabFormStep,
    GoabPages
  ],
  templateUrl: "./form-stepper-sandbox.component.html"
})
export class FormStepperSandboxComponent {
  step = -1;

  onChange(event: GoabFormStepperOnChangeDetail) {
    console.log("onChange event ", event);
    this.step = event.step;
  }
}
