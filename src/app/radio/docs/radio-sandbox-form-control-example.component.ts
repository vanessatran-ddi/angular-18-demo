import { Component } from "@angular/core";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-radio-sandbox-form-control-example',
  templateUrl: './radio-sandbox-form-control-example.component.html',
  imports: [GoabFormItem, GoabRadioGroup, GoabRadioItem, ReactiveFormsModule],
  standalone: true,
})
export class RadioSandboxFormControlExampleComponent {
  fg!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      item: ""
    })
  }
}
