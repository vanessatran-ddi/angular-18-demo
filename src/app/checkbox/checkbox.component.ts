import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {AngularComponentsModule} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
// import {GoABCheckboxOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    // AngularComponentsModule
  ],
  templateUrl: './checkbox.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  checkbox1Checked = false;
  checkbox2Checked = true;
  checkbox3Checked = false;
  reactiveFormCtrl = new FormControl();
  testFormCtrl = new FormControl();
  // testFormCtrl = new FormControl({
  //   value: null,
  //   disabled: true
  // });
  test1FormCtrl = new FormControl();
  bindingVal = "";
  bindingNoVal = "";

  constructor() {
    // this.testFormCtrl.disable();
  }

  onChange() {
    this.checkbox1Checked = !this.checkbox1Checked;
  }

  onChange2() {
    this.checkbox2Checked = !this.checkbox2Checked;
  }

  onChange3() {
    this.checkbox3Checked = !this.checkbox3Checked;
  }
}
