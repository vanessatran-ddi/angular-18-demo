import { Component } from "@angular/core";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-radio-use-tag-description-example',
  templateUrl: './radio-use-tag-description-example.component.html',
  imports: [GoabFormItem, GoabRadioGroup, GoabRadioItem],
  standalone: true,
})
export class RadioUseTagDescriptionExampleComponent {
  onChange(event: GoabRadioGroupOnChangeDetail) {
    console.log('name ', event.name, ' value ', event.value);
  }
}
