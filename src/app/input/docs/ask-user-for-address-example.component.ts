import {Component} from "@angular/core";
import {GoabBlock, GoabDropdown, GoabDropdownItem, GoabFormItem, GoabInput} from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail, GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-ask-user-for-address-example",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabInput,
    GoabBlock,
    GoabDropdown,
    GoabDropdownItem,
    ReactiveFormsModule
  ],
  templateUrl: "./ask-user-for-address-example.component.html"
})
export class AskUserForAddressExampleComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      address: "",
      suite: "",
      city: "",
      province: "",
      postalCode: "",
    });
  }
  inputOnChange (event: GoabInputOnChangeDetail) {
  }
  dropdownOnChange (event: GoabDropdownOnChangeDetail) {

  }
}
