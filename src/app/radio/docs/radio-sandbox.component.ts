import { Component } from "@angular/core";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-radio-sandbox',
  templateUrl: './radio-sandbox.component.html',
  imports: [GoabFormItem, GoabRadioGroup, GoabRadioItem],
  standalone: true,
})
export class RadioSandboxComponent {
  radioOnChange(e: GoabRadioGroupOnChangeDetail) {
    // handle change
    console.log("onChange", e.name, e.value);
  }
}
