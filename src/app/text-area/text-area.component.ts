import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoabTextAreaOnChangeDetail, GoabTextAreaOnKeyPressDetail} from "@abgov/ui-components-common";
import {GoabFormItem, GoabInput, GoabTextArea} from "@abgov/angular-components";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    GoabTextArea,
    GoabFormItem,
    GoabInput,
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

  onChange(e: GoabTextAreaOnChangeDetail) {
    console.log("onChange", e.value)
    this.boundVal = e.value;
  }

  onKeyPress(e: GoabTextAreaOnKeyPressDetail) {
    // console.log("keypressed", e.name, e.value, e.key);
  }
}
