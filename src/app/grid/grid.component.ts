import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabCard,
  GoabCardActions,
  GoabCardContent, GoabCardImage,
  GoabContainer,
  GoabGrid
} from "@abgov/angular-components";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    GoabContainer,
    GoabGrid,
    GoabCard,
    GoabCardActions,
    GoabCardImage,
    GoabCardContent,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridComponent {

}
