import { Component } from "@angular/core";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-radio-max-width-example',
  templateUrl: './radio-max-width-example.component.html',
  imports: [GoabFormItem, GoabRadioGroup, GoabRadioItem],
  standalone: true,
})
export class RadioMaxWidthExampleComponent {
  onChange(_: GoabRadioGroupOnChangeDetail) {}
}
