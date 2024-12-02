import {Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild} from '@angular/core';
import {AngularComponentsModule, GoabCheckbox, GoabFormItem} from "@abgov/angular-components";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoabCheckboxOnChangeDetail} from "@abgov/ui-components-common";
import {CheckboxDocsComponent} from "./docs/checkbox-docs.component";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    GoabCheckbox,
    ReactiveFormsModule,
    GoabFormItem,
    AngularComponentsModule,
    CheckboxDocsComponent,
  ],
  templateUrl: './checkbox.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: [""]
    })
  }

}
