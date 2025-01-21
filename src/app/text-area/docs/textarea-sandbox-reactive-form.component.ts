import { Component } from "@angular/core";
import { GoabFormItem, GoabTextArea } from "@abgov/angular-components";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-textarea-sandbox-reactive-form',
  templateUrl: './textarea-sandbox-reactive-form.component.html',
  imports: [GoabFormItem, GoabTextArea, ReactiveFormsModule],
  standalone: true,
})
export class TextareaSandboxReactiveFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: '',
    });
  }
}

