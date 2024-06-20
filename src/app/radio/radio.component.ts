import { Component } from '@angular/core';
import {GoABRadioGroupOnChangeDetail} from "@abgov/ui-components-common";
import {GoABFormItem, GoABRadioGroup, GoABRadioItem} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [ GoABRadioGroup,
    GoABRadioItem,
    GoABFormItem,
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

  onChange(e: GoABRadioGroupOnChangeDetail) {
    console.log("onChange", e.name, e.value);
    this.radioValue = e.value;
  }
}
