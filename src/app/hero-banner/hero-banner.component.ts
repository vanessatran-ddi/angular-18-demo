import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {
//   GoABButton,
//   GoABButtonGroup,
//   GoABHeroBanner,
//   GoABHeroBannerActions
// } from "@abgov/angular-components";

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    // GoABHeroBanner,
    // GoABHeroBannerActions,
    // GoABButton,
    // GoABButtonGroup,
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroBannerComponent {

}
