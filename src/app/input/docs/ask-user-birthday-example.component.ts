import {Component} from "@angular/core";
import {GoabBlock, GoabDropdown, GoabDropdownItem, GoabFormItem, GoabInput} from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail, GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-ask-user-birthday-example",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabBlock,
    GoabInput,
    GoabDropdown,
    GoabDropdownItem,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: "./ask-user-birthday-example.component.html"
})
export class AskUserBirthdayExampleComponent {
  form!: FormGroup;
  day = "";
  month = "";
  year = "";
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      day: "",
      month: "",
      year: ""
    })
  }
  inputOnChange(event: GoabInputOnChangeDetail) {
  }
  dropdownOnChange(event: GoabDropdownOnChangeDetail) {

  }
}
