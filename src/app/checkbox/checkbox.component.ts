import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AngularComponentsModule, GoabCheckbox, GoabFormItem} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {GoabCheckboxOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    GoabCheckbox,
    ReactiveFormsModule,
    GoabFormItem,
    AngularComponentsModule
  ],
  templateUrl: './checkbox.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  checkbox1Checked = false;
  checkbox2Checked = true;
  checkbox3Checked = false;
  reactiveFormCtrl = new FormControl("foobar");
  testFormCtrl = new FormControl({
    value: null,
    disabled: true
  });
  test1FormCtrl = new FormControl();
  bindingVal = "";
  bindingNoVal = "";

  constructor() {
  }

  onChange(e: GoabCheckboxOnChangeDetail) {
    console.log(e)
    this.checkbox1Checked = !this.checkbox1Checked;
  }

  onChange2(e: GoabCheckboxOnChangeDetail) {
    console.log(e)
    this.checkbox2Checked = !this.checkbox2Checked;
  }

  onChange3(e: GoabCheckboxOnChangeDetail) {
    console.log(e)
    this.checkbox3Checked = !this.checkbox3Checked;
  }
}
