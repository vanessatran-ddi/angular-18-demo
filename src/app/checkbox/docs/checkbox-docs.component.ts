import {Component} from "@angular/core";
import {
  GoabFormItem,
  GoabCheckbox,
} from "@abgov/angular-components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GoabCheckboxOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-checkbox-docs",
  standalone: true,
  templateUrl: './checkbox-docs.component.html',
  imports: [
    /// For Reactive Form Control
    ReactiveFormsModule,
    FormsModule,
    GoabFormItem,
    GoabCheckbox
  ]
})
export class CheckboxDocsComponent {
  checked = false;

  item=false;

  checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
    console.log(event);
    this.checked = event.checked;
  }
}
