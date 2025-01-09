import {Component} from "@angular/core";
import {GoabButton, GoabButtonGroup, GoabModal} from "@abgov/angular-components";

@Component({
  selector: "app-modal-confirm-destructive-example",
  standalone: true,
  imports: [
    GoabButton,
    GoabModal,
    GoabButtonGroup
  ],
  templateUrl: "./confirm-destructive-modal-example.component.html"
})
export class ConfirmDestructiveModalExampleComponent {
  open = false;
  toggleModal() {
    this.open = !this.open;
  }
}
