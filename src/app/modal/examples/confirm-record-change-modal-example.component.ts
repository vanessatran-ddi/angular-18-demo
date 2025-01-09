import {Component} from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDatePicker,
  GoabFormItem,
  GoabModal
} from "@abgov/angular-components";
import {GoabDatePickerOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-modal-confirm-record-change-example",
  templateUrl: "./confirm-record-change-modal-example.component.html",
  standalone: true,
  imports: [
    GoabButton,
    GoabModal,
    GoabContainer,
    GoabFormItem,
    GoabDatePicker,
    GoabButtonGroup
  ]
})
export class ConfirmRecordChangeModalExampleComponent {
  open = false;
  effectiveDate = new Date();

  toggleModal() {
    this.open = !this.open;
  }

  onChangeEffectiveDate(event: GoabDatePickerOnChangeDetail) {
    this.effectiveDate = event.value as Date;
  }
}
