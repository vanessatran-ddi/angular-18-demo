import {Component} from "@angular/core";
import {GoabFormItem, GoabInput} from "@abgov/angular-components";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-input-sandbox",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabInput,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: "./input-sandbox.component.html"
})
export class InputSandboxComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [""]
    });
  }

  item = "";
  inputOnChange(event: GoabInputOnChangeDetail) {
    this.item = event.value;
  }
}
