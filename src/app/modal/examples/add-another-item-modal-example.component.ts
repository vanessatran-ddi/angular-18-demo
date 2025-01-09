import {Component} from "@angular/core";
import {
  GoabButton, GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabModal, GoabTextArea
} from "@abgov/angular-components";
import {
  GoabDropdownOnChangeDetail,
  GoabInputOnChangeDetail,
  GoabTextAreaOnChangeDetail
} from "@abgov/ui-components-common";

@Component({
  selector: "app-modal-add-another-item-example",
  templateUrl: "./add-another-item-modal-example.component.html",
  imports: [
    GoabButton,
    GoabModal,
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabInput,
    GoabTextArea,
    GoabButtonGroup
  ],
  standalone: true
})
export class AddAnotherItemModalExampleComponent {
  open = false;
  type: string|undefined = "";
  name = "";
  description = "";

  toggleModal() {
    this.open = !this.open;
  }

  updateType(event: GoabDropdownOnChangeDetail) {
    this.type = event.value;
  }

  updateName(event: GoabInputOnChangeDetail) {
    this.name = event.value;
  }

  updateDescription(event: GoabTextAreaOnChangeDetail) {
    this.description = event.value;
  }
}
