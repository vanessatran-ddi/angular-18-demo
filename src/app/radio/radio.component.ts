import { Component } from '@angular/core';
import {GoabRadioGroupOnChangeDetail} from "@abgov/ui-components-common";
import { GoabDivider, GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import { RadioSandboxComponent } from "./docs/radio-sandbox.component";
import {
  RadioSandboxFormControlExampleComponent
} from "./docs/radio-sandbox-form-control-example.component";
import { RadioSandboxTemplateDrivenComponent } from "./docs/radio-sandbox-template-driven.component";
import { RadioUseTagDescriptionExampleComponent } from "./docs/radio-use-tag-description-example.component";
import { RadioMaxWidthExampleComponent } from "./docs/radio-max-width-example.component";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    GoabRadioGroup,
    GoabRadioItem,
    GoabFormItem,
    ReactiveFormsModule,
    RadioSandboxComponent,
    GoabDivider,
    RadioSandboxFormControlExampleComponent,
    RadioSandboxTemplateDrivenComponent,
    RadioUseTagDescriptionExampleComponent,
    RadioMaxWidthExampleComponent,
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
})
export class RadioComponent {
  constructor() {}

  boundVal = '';
  radioValue = 'orange';

  reactiveFormCtrl = new FormControl('blue');

  dynamicItems = [
    {
      name: 'Fruits',
      value: 'banana',
      options: [{ value: 'apple' }, { value: 'orange' }, { value: 'banana' }],
    },
    {
      name: 'Vegetables',
      value: 'carrot',
      options: [
        { value: 'brocolli' },
        { value: 'carrot' },
        { value: 'spinach' },
      ],
    },
  ];

  onChange(e: GoabRadioGroupOnChangeDetail) {
    console.log('onChange', e.name, e.value);
    this.radioValue = e.value;
  }
}
