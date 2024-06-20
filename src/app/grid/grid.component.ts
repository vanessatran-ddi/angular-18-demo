import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoABCard,
  GoABCardActions,
  GoABCardContent, GoABCardImage,
  GoABContainer,
  GoABGrid
} from "@abgov/angular-components";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    GoABContainer,
    GoABGrid,
    GoABCard,
    GoABCardActions,
    GoABCardImage,
    GoABCardContent,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridComponent {

}
