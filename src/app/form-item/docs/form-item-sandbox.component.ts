import {Component} from "@angular/core";
import {GoabFormItem, GoabInput} from "@abgov/angular-components";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-form-item-sandbox",
  templateUrl: "./form-item-sandbox.component.html",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabInput,
    ReactiveFormsModule
  ]
})
export class FormItemSandboxComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [""]
    });
  }

  value: string = "";
  inputOnChange(event: GoabInputOnChangeDetail) {
    this.value = event.value;
  }
}
