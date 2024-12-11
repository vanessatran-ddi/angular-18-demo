import {Component} from "@angular/core";
import {GoabButton, GoabHeroBanner} from "@abgov/angular-components";

@Component({
  selector: "app-hero-banner-with-actions",
  standalone: true,
  imports: [
    GoabHeroBanner,
    GoabButton
  ],
  templateUrl: "./hero-banner-with-actions.component.html"
})
export class HeroBannerWithActionsComponent {
  onClick() {
    console.log("clicked!");
  }
}
