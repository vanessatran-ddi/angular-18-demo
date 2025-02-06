import { Component } from "@angular/core";
import { GoabFilterChip } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-filter-chip-delete-event-example',
  templateUrl: './filter-chip-delete-event-example.component.html',
  imports: [GoabFilterChip, NgForOf, GoabFilterChip],
  standalone: true,
})
export class FilterChipDeleteEventExampleComponent {
  chips: string[] = ['Chip 1', 'Chip 2', 'Chip 3'];

  deleteChip(chip: string): void {
    this.chips = this.chips.filter((c) => c !== chip);
  }
}
