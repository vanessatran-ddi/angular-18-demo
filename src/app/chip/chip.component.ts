import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoabChip} from "@abgov/angular-components";

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    GoabChip
  ],
  templateUrl: './chip.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChipComponent {
  chips = ["Doritos", "Fritos", "Lays"];

  constructor() { }

  deleteChip(chip: string) {
    this.chips = this.chips.filter((c) => c !== chip);
  }

  onClick() {
    console.log("deleting clicked");
  }
}
