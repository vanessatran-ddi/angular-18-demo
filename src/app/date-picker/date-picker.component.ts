import {Component} from "@angular/core";
import {GoabButton, GoabButtonGroup, GoabDatePicker, GoabDivider} from "@abgov/angular-components";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-date-picker",
  standalone: true,
  templateUrl: "./date-picker.component.html",
  imports: [
    GoabDatePicker,
    ReactiveFormsModule,
    FormsModule,
    GoabButtonGroup,
    GoabDivider,
    GoabButton,
  ],
})
export class DatePickerComponent {
  disabled = false;
  dateControl = new FormControl<Date|undefined>(new Date());
  value: Date|undefined = new Date();

  disableDatePicker() {
    this.dateControl.disable();
    this.disabled = true;
  }

  enableDatePicker() {
    this.dateControl.enable();
    this.disabled = false;
  }

  resetDatePicker() {
    this.value = undefined;
    this.dateControl.patchValue(null);
  }
}
