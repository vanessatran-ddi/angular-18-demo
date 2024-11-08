import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: "abgov-chip",
  standalone: true,
  templateUrl: "./filter-chip.component.html",
  imports: [
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterChipComponent {
  chips: string[] = ["Chip 1", "Chip 2", "Chip 3"];
  activeFilters: string[] = [];
  typedChips: string[] = ["Typed Chip 1", "Typed Chip 2", "Typed Chip 3"];
  inputValue = "";

  deleteChip(chip: string): void {
    this.chips = this.chips.filter((c) => c !== chip);
  }

  onClick(): void {
    console.log("Chip clicked");
  }
  onFilterRemove(category: string): void {
    console.log(`Filter removed: ${category}`);
  }
}
