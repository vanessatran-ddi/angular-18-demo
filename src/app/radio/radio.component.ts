import { Component } from '@angular/core';
import {GoabRadioGroupOnChangeDetail} from "@abgov/ui-components-common";
import {GoabFormItem, GoabRadioGroup, GoabRadioItem} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [ GoabRadioGroup,
    GoabRadioItem,
    GoabFormItem,
    ReactiveFormsModule,],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  constructor() { }

  boundVal = "";
  radioValue = "orange"

  reactiveFormCtrl = new FormControl("blue");

  dynamicItems = [
    {
      name: "Fruits",
      value: "banana",
      options: [{ value: "apple" }, { value: "orange" }, { value: "banana" }],
    },
    {
      name: "Vegetables",
      value: "carrot",
      options: [
        { value: "brocolli" },
        { value: "carrot" },
        { value: "spinach" },
      ],
    },
  ];

  onChange(e: GoabRadioGroupOnChangeDetail) {
    console.log("onChange", e.name, e.value);
    this.radioValue = e.value;
  }
}
