import {Component} from "@angular/core";
import {
  GoabBlock,
  GoabButton, GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput
} from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail, GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-button-docs",
  standalone: true,
  templateUrl: './button-docs.component.html',
  imports: [
    GoabButton,
    GoabBlock,
    GoabFormItem,
    GoabInput,
    GoabDropdown,
    GoabDropdownItem,
    GoabButtonGroup,

    /// For Reactive Form Control
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ButtonDocsComponent {
  form!: FormGroup;

  address = '';
  suite = '';
  city = '';
  province = '';
  postalCode = '';

  input = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      address: [''],
      suite: [''],
      city: [''],
      province: [''],
      postalCode: ['']
    });
  }

  onClick() {
    console.log('clicked ');
  }
  inputOnChange(event: GoabInputOnChangeDetail) {
    console.log("OnChange is called with event ", event);
  }
  dropdownOnChange(event: GoabDropdownOnChangeDetail) {
    console.log("onChangeDropdown", event);
  }
}
