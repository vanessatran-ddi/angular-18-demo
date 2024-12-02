import { Component } from "@angular/core";
import {
  GoabBlock,
  GoabButton,
  GoabContainer, GoabDropdown, GoabDropdownItem,
  GoabFormItem,
  GoabGrid,
  GoabRadioGroup, GoabRadioItem,
  GoabTable, GoabTextArea
} from "@abgov/angular-components";
import {
  GoabDropdownOnChangeDetail,
  GoabRadioGroupOnChangeDetail,
  GoabTextAreaOnChangeDetail
} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-container-docs',
  standalone: true,
  imports: [
    GoabContainer,
    GoabBlock,
    GoabContainer,
    GoabButton,
    GoabTable,
    GoabGrid,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabTextArea,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './container-docs.component.html',
  styleUrls: ['./container-docs.component.css'],
})
export class ContainerDocsComponent {

  case = "";
  reason = "";
  message = "";

  onClick() {
    console.log('Clicked');
  }

  radioOnChange(event: GoabRadioGroupOnChangeDetail) {
    console.log("onChangeRadio", event);
    this.case = event.value;
  }

  dropdownOnChange(event: GoabDropdownOnChangeDetail) {
    console.log("onChangeDropdown", event);
    this.reason = event.value || "";
  }

  textareaOnChange(event: GoabTextAreaOnChangeDetail) {
    console.log("onChangeTextArea", event);
    this.message = event.value;
  }

  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      case: [''],
      reason: ['']
    })
  }
}
