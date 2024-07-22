import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerComponent {
  onChange(event: Event) {
    // handle change
    console.log((event as CustomEvent).detail.value);
  }
}
