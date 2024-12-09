import {Component} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoabDropdown, GoabDropdownItem, GoabFormItem} from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-dropdown-sandbox",
  standalone: true,
  templateUrl: "./dropdown-sandbox.component.html",
  imports: [
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    ReactiveFormsModule,
  ]
})
export class DropdownSandboxComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: ["green"]
    });
  }

  dropdownOnChange(event: GoabDropdownOnChangeDetail) {
    console.log(event.value);
  }
}
