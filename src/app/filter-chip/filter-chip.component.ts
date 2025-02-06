import { Component } from "@angular/core";
import {
  FilterChipDeleteEventExampleComponent
} from "./docs/filter-chip-delete-event-example.component";
import { FilterChipRandomExampleComponent } from "./docs/filter-chip-random-example.component";
import { FilterChipTypedChipExampleComponent } from "./docs/filter-chip-typed-chip-example.component";

@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.component.html',
  imports: [
    FilterChipDeleteEventExampleComponent,
    FilterChipRandomExampleComponent,
    FilterChipTypedChipExampleComponent,
  ],
  standalone: true,
})
export class FilterChipComponent {}
