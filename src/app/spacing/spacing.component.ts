import { Component } from '@angular/core';
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabIcon,
  GoabInput,
  GoabSpacer, GoabTextArea
} from "@abgov/angular-components";

@Component({
  selector: 'app-spacing',
  standalone: true,
  imports: [
    GoabInput,
    GoabButton,
    GoabIcon,
    GoabSpacer,
    GoabBlock,
    GoabTextArea,
    GoabBadge,
  ],
  templateUrl: './spacing.component.html',
  styleUrl: './spacing.component.css'
})
export class SpacingComponent {

}
