import { Component } from "@angular/core";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { FormsModule } from "@angular/forms";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-radio-sandbox-template-driven',
  templateUrl: './radio-sandbox-template-driven.component.html',
  imports: [GoabFormItem, GoabRadioGroup, GoabRadioItem, FormsModule],
  standalone: true,
})
export class RadioSandboxTemplateDrivenComponent {
  item = "1";

  radioOnChange(event: GoabRadioGroupOnChangeDetail) {
    this.item = event.value;
  }
}
