import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoABIcon, GoABTooltip} from "@abgov/angular-components";

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    GoABTooltip,
    GoABIcon,
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TooltipComponent {
  randomValue = "Trying some more long form text here to see how it's rendered"
  constructor() { }
}
