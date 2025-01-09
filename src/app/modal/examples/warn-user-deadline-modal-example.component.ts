import {Component} from "@angular/core";
import {GoabButton, GoabButtonGroup, GoabModal} from "@abgov/angular-components";

@Component({
  selector: "app-modal-warn-user-deadline-modal-example",
  templateUrl: "./warn-user-deadline-modal-example.component.html",
  standalone: true,
  imports: [
    GoabButton,
    GoabModal,
    GoabButtonGroup
  ]
})
export class WarnUserDeadlineModalExampleComponent {
  open = false;
  toggleModal() {
    this.open = !this.open;
  }
}
