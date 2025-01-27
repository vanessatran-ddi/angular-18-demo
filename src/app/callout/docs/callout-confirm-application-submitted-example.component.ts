import { Component } from "@angular/core";
import { GoabButton, GoabButtonGroup, GoabCallout } from "@abgov/angular-components";

@Component({
  selector: 'app-callout-confirm-application-submitted-example',
  templateUrl: './callout-confirm-application-submitted-example.component.html',
  imports: [GoabCallout, GoabButtonGroup, GoabButton],
  standalone: true,
})
export class CalloutConfirmApplicationSubmittedExampleComponent {}
