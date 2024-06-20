import { Component } from '@angular/core';
import {
  GoABBadge,
  GoABBlock,
  GoABButton,
  GoABIcon,
  GoABInput,
  GoABSpacer, GoABTextArea
} from "@abgov/angular-components";

@Component({
  selector: 'app-spacing',
  standalone: true,
  imports: [
    GoABInput,
    GoABButton,
    GoABIcon,
    GoABSpacer,
    GoABBlock,
    GoABTextArea,
    GoABBadge,
  ],
  templateUrl: './spacing.component.html',
  styleUrl: './spacing.component.css'
})
export class SpacingComponent {

}
