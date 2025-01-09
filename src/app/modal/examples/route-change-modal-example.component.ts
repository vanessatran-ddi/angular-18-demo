import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {GoabButton, GoabButtonGroup, GoabModal} from "@abgov/angular-components";

@Component({
  selector: "app-modal-route-change-example",
  templateUrl: "./route-change-modal-example.component.html",
  imports: [
    GoabButton,
    GoabModal,
    GoabButtonGroup
  ],
  standalone: true
})
export class RouteChangeModalExampleComponent {
  open = false;
  constructor(private router: Router) {}

  onOpen() {
    this.open = true;
  }
  onClose() {
    this.open = false;
  }
  onChangeRoute() {
    this.open = false;
    setTimeout(() => this.router.navigate(["/components"]), 0)
  }
}
