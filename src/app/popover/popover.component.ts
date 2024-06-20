import { Component } from '@angular/core';
import {
  GoABBlock,
  GoABButton,
  GoABButtonGroup,
  GoABPopover,
  GoABSpacer
} from "@abgov/angular-components";

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [GoABPopover,
    GoABButton,
    GoABButtonGroup,
    GoABBlock,
    GoABSpacer,],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  onClick() {
    console.log("clicked");
  }
}
