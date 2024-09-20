import { Component } from '@angular/core';
import {
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabPopover,
  GoabSpacer
} from "@abgov/angular-components";

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [GoabPopover,
    GoabButton,
    GoabButtonGroup,
    GoabBlock,
    GoabSpacer,],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  onClick() {
    console.log("clicked");
  }
}
