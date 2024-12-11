import {Component} from "@angular/core";
import {GoabBlock, GoabFormItem, GoabInput} from "@abgov/angular-components";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-ask-user-indian-registration-number-example",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabBlock,
    GoabInput,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: "./ask-user-indian-registration-number-example.component.html"
})
export class AskUserIndianRegistrationNumberExampleComponent {
  form!: FormGroup;
  bandNo = "";
  family = "";
  position = "";
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bandNo: "",
      family: "",
      position: "",
    })
  }
  inputOnChange(event: GoabInputOnChangeDetail) {

  }
}
