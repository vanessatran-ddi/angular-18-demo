import {Component} from "@angular/core";
import {GoabFormItem, GoabFormItemSlot, GoabInput} from "@abgov/angular-components";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-form-item-example1",
  templateUrl: "./form-item-example1.component.html",
  imports: [
    GoabFormItem,
    GoabInput,
    GoabFormItemSlot,
    ReactiveFormsModule
  ]
})
export class FormItemExample1Component {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [""]
    });
  }
}
