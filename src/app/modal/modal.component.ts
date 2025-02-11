import { Component } from '@angular/core';
import {
  GoabButton,
  GoabButtonGroup, GoabDivider, GoabDropdown, GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabModal
} from "@abgov/angular-components";
import {Router} from "@angular/router";
import {BasicModalExampleComponent} from "./examples/basic-modal-example.component";
import {
  ConfirmDestructiveModalExampleComponent
} from "./examples/confirm-destructive-modal-example.component";
import {WarnUserDeadlineModalExampleComponent} from "./examples/warn-user-deadline-modal-example.component";
import {
  ConfirmRecordChangeModalExampleComponent
} from "./examples/confirm-record-change-modal-example.component";
import {AddAnotherItemModalExampleComponent} from "./examples/add-another-item-modal-example.component";
import {RouteChangeModalExampleComponent} from "./examples/route-change-modal-example.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [GoabModal,
    GoabButton,
    GoabButtonGroup,
    GoabFormItem,
    GoabInput,
    GoabDropdown,
    GoabDropdownItem, BasicModalExampleComponent, GoabDivider, ConfirmDestructiveModalExampleComponent, WarnUserDeadlineModalExampleComponent, ConfirmRecordChangeModalExampleComponent, AddAnotherItemModalExampleComponent, RouteChangeModalExampleComponent,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private router: Router) { }

  transition: "fast" | "slow" | "none" = "fast";

  calloutVariant:
    | "information"
    | "important"
    | "success"
    | "emergency"
    | "event" = "information";

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  isOpen5 = false;
  isOpen6 = false;
  isOpen7 = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  openModal2() {
    this.isOpen2 = true;
  }

  closeModal2() {
    this.isOpen2 = false;
  }

  closeModal3() {
    this.isOpen3 = false;
  }

  closeModal4() {
    this.isOpen4 = false;
    setTimeout(() => this.router.navigate(["/input"]), 0);
  }

  closeModal5() {
    this.isOpen5 = false;
  }

  openModal6() {
    this.isOpen6 = true;
  }

  closeModal6() {
    this.isOpen6 = false;
  }

  openModal7() {
    this.isOpen7 = true;
  }

  closeModal7() {
    this.isOpen7 = false;
  }

  showModal(transition: "fast" | "slow" | "none") {
    this.transition = transition;
    this.isOpen3 = true;
  }

  showCalloutModal(
    calloutVariant:
      | "information"
      | "important"
      | "success"
      | "emergency"
      | "event"
  ) {
    this.calloutVariant = calloutVariant;
    this.isOpen5 = true;
  }
}
