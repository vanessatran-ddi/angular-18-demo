import {Component} from "@angular/core";
import {GoabButton, GoabButtonGroup, GoabDatePicker, GoabDivider, GoabFormItem} from "@abgov/angular-components";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

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
    GoabFormItem,
  ],
})
export class DatePickerComponent {
  disabled = false;
  dateControl = new FormControl<Date|undefined>(new Date());
  itemFormCtrl = new FormControl(new Date());
  value: Date|undefined = new Date();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [new Date()],
    })
  }

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

  item = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    // handle change
    console.log(event.value);
  }
}
