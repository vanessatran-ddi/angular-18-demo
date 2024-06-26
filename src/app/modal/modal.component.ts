import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {
//   GoABButton,
//   GoABButtonGroup, GoABDropdown, GoABDropdownItem,
//   GoABFormItem,
//   GoABInput,
//   GoABModal
// } from "@abgov/angular-components";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  standalone: true,
  // imports: [GoABModal,
  //   GoABButton,
  //   GoABButtonGroup,
  //   GoABFormItem,
  //   GoABInput,
  //   GoABDropdown,
  //   GoABDropdownItem,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent implements OnInit {
  @ViewChild("input") input: ElementRef | undefined;
  constructor(private router: Router) {this.text = "";}

  transition: "fast" | "slow" | "none" = "fast";

  calloutVariant: "information" | "important" | "success" | "emergency" | "event" =
    "information";

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  isOpen5 = false;
  isOpen6 = false;
  isOpen7 = false;
  text: string;

  isAddDeliveryAddressModalOpen = false;
  onChange() {}
  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
  }

  openAddDeliveryAddressModal() {
    console.log("openAddDeliveryAddressModal ", this.input);
    setTimeout(() => {
      // this will make the execution after the above boolean has changed
      this.input?.nativeElement.focus();
    }, 0);
    this.isAddDeliveryAddressModalOpen = true;
  }

  closeAddDeliveryAddressModal() {
    this.isAddDeliveryAddressModalOpen = false;
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
    calloutVariant: "information" | "important" | "success" | "emergency" | "event",
  ) {
    this.calloutVariant = calloutVariant;
    this.isOpen5 = true;
  }

  ngOnInit() {
    setTimeout(() => this.text = "Dynamic text", 3000);
  }
}
