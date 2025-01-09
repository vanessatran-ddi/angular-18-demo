import {Component} from "@angular/core";
import {GoabButton, GoabButtonGroup, GoabModal} from "@abgov/angular-components";

@Component({
  selector: "app-basic-modal-example",
  standalone: true,
  imports: [
    GoabButton,
    GoabModal,
    GoabButtonGroup
  ],
  templateUrl: "./basic-modal-example.component.html"
})
export class BasicModalExampleComponent {
  open = false;
  toggleModal() {
    this.open = !this.open;
  }
}
