import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
// import {GoABRadioGroupOnChangeDetail} from "@abgov/ui-components-common";
// import {GoABFormItem, GoABRadioGroup, GoABRadioItem} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    // GoABRadioGroup,
    // GoABRadioItem,
    // GoABFormItem,
    ReactiveFormsModule,],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioComponent implements OnInit {
  constructor() {}

  boundVal = "";

  reactiveFormCtrl = new FormControl("red");

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

  ngOnInit() {
    this.reactiveFormCtrl.setValue("orange");
    this.reactiveFormCtrl.registerOnChange((val: any) => {
      console.log("reactiveFormCtrl", val);
    });
  }

  onClick() {
    console.log("clicked");
    this.reactiveFormCtrl.setValue("red");
  }


  onChange(e: any) {
    console.log("onChange", e.detail.name, e.detail.value);
  }
}
