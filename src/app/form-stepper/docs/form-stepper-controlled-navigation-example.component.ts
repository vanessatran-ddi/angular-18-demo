import {Component} from "@angular/core";
import {GoabButton, GoabFormStep, GoabFormStepper, GoabPages} from "@abgov/angular-components";
import {GoabFormStepperOnChangeDetail} from "@abgov/ui-components-common";

@Component({
    selector: "app-form-stepper-controlled-navigation-example",
    standalone: true,
    imports: [
        GoabFormStepper,
        GoabFormStep,
        GoabPages,
        GoabButton
    ],
    templateUrl: "./form-stepper-controlled-navigation-example.component.html"
})
export class FormStepperControlledNavigationExampleComponent {
    step = 1;  // set to first step
    updateStep(event: GoabFormStepperOnChangeDetail) {
        this.step = event.step;
    }
    setPage(page: number) {
        if (page < 1 || page > 4) return;
        this.step = page
    }
}
