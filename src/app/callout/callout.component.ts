import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabCallout} from "@abgov/angular-components";

@Component({
  selector: 'app-callout',
  standalone: true,
  imports: [
    GoabCallout
  ],
  templateUrl: './callout.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalloutComponent {

}
