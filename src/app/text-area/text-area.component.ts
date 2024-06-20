import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {GoABFormItem, GoABInput, GoABTextArea} from "@abgov/angular-components";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoABTextAreaOnChangeDetail, GoABTextAreaOnKeyPressDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    GoABTextArea,
    GoABFormItem,
    GoABInput,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {
  boundVal = "";
  reactiveFormCtrl = new FormControl();
  form = new FormGroup({
    textarea: new FormControl(),
    input: new FormControl(),
  })

  constructor() { }

  onChange(e: GoABTextAreaOnChangeDetail) {
    console.log("onChange", e.value)
    this.boundVal = e.value;
  }

  onKeyPress(e: GoABTextAreaOnKeyPressDetail) {
    // console.log("keypressed", e.name, e.value, e.key);
  }
}
