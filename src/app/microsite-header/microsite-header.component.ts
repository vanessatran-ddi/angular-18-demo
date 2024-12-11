import { Component } from '@angular/core';
import {GoabDivider, GoabMicrositeHeader} from "@abgov/angular-components";
import {CustomClickEventExampleComponent} from "./docs/custom-click-event-example.component";
import {SlottedVersionExampleComponent} from "./docs/slotted-version-example.component";

@Component({
  selector: 'app-microsite-header',
  standalone: true,
  imports: [GoabMicrositeHeader, CustomClickEventExampleComponent, GoabDivider, SlottedVersionExampleComponent,],
  templateUrl: './microsite-header.component.html',
  styleUrl: './microsite-header.component.css'
})
export class MicrositeHeaderComponent {
  handleFeedbackClick() {

  }
}
