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
  value = "Fri Apr 26 2024 10:43:28 GMT-0400 (Eastern Daylight Time)";
  onChange(event: Event) {
    // handle change
    console.log((event as CustomEvent).detail.value);
    this.value = (event as CustomEvent).detail.value;
  }
  reset() {
    this.value = "";
  }
}
