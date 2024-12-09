import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabBlock,
  GoabButton, GoabDivider,
  GoabDropdown, GoabDropdownItem,
  GoabFormItem,
  GoabInput
} from "@abgov/angular-components";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormItemSandboxComponent} from "./docs/form-item-sandbox.component";
import {FormItemExample1Component} from "./docs/form-item-example1.component";
import {FormItemExample2Component} from "./docs/form-item-example2.component";

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [
    GoabInput,
    GoabFormItem,
    GoabBlock,
    GoabButton,
    GoabDropdown,
    GoabDropdownItem,
    ReactiveFormsModule,
    FormItemSandboxComponent,
    FormItemExample1Component,
    GoabDivider,
    FormItemExample2Component,
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormItemComponent {
  formGroup = new FormGroup({
    txtRequesterName: new FormControl(),
  })

  form: FormGroup;
  colors: string[] = ["red", "green", "blue"];
  colorFormCtrl = new FormControl("");
  descriptionFormCtrl = new FormControl("");


  constructor() {
    this.form = new FormGroup({
      colorFormContrl: this.colorFormCtrl,
      descriptionFormCtrl: this.descriptionFormCtrl,
    });
  }
  searchRequesterClickIcon() {
    console.log("Current value ", this.formGroup.get("txtRequesterName")?.value);
    this.formGroup.get("txtRequesterName")?.patchValue("");
    console.log("New value ", this.formGroup.get("txtRequesterName")?.value);
  }

  onSubmit() {
    this.colorFormCtrl.setValidators([Validators.required]);
    this.colorFormCtrl.updateValueAndValidity();

    this.descriptionFormCtrl.setValidators([Validators.required]);
    this.descriptionFormCtrl.updateValueAndValidity();

    this.form.markAllAsTouched();

    if (this.form.valid) {
    }
  }

  onCancel() {

  }
}
