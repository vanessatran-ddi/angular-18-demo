import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabButton,
  GoabDetails,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem
} from "@abgov/angular-components";
import {GoabInputOnChangeDetail, GoabRadioGroupOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    GoabDetails,
    GoabButton,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabInput,
  ],
  templateUrl: './detail.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailComponent {
  isOpen1 = true;
  constructor() { }
  toggle() {
    this.isOpen1 = !this.isOpen1;
  }
  radioOnChange(event: GoabRadioGroupOnChangeDetail) {
    console.log(event);
  }
  inputOnChange(event: GoabInputOnChangeDetail) {
    console.log(event);
  }
}
