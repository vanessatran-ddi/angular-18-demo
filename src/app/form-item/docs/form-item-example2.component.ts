import {Component} from "@angular/core";
import {GoabFormItem, GoabFormItemSlot, GoabInput} from "@abgov/angular-components";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-form-item-example2",
  templateUrl: "./form-item-example2.component.html",
  imports: [
    GoabFormItem,
    GoabInput,
    ReactiveFormsModule,
    GoabFormItemSlot
  ]
})
export class FormItemExample2Component {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [""]
    });
  }
}
