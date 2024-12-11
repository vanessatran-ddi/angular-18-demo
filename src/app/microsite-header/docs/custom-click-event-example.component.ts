import {Component} from "@angular/core";
import {GoabMicrositeHeader} from "@abgov/angular-components";

@Component({
  selector: "app-microsite-header-custom-click-event-example",
  standalone: true,
  imports: [
    GoabMicrositeHeader
  ],
  templateUrl: "./custom-click-event-example.component.html"
})
export class CustomClickEventExampleComponent {

  handleFeedbackClick() {

  }
}
