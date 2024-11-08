import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {JsonPipe} from "@angular/common";
// import {GoABFormItem, GoABInput, GoABTextArea} from "@abgov/angular-components";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
// import { SINValidator } from '@abgov/angular-components';
// import {GoABTextAreaOnChangeDetail, GoABTextAreaOnKeyPressDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    // GoABTextArea,
    // GoABFormItem,
    // GoABInput,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TextAreaComponent {
  boundVal = "";
  reactiveFormCtrl = new FormControl();
  form = new FormGroup({
    textarea: new FormControl(),
    input: new FormControl(),
  })

  constructor() { }

  onChange(e: any) {
    console.log("changed", e.detail.name, e.detail.value);
    // const validate = SINValidator();
    // console.log("SINValidator", validate(e.detail.value));
  }

  onKeyPress(e: any) {
    console.log("changed", e.detail.name, e.detail.value, e.detail.key);
  }
}
