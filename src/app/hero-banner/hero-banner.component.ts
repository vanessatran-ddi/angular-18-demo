import { Component } from '@angular/core';
import {
  GoABButton,
  GoABButtonGroup,
  GoABHeroBanner,
} from "@abgov/angular-components";

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    GoABHeroBanner,
    GoABButton,
    GoABButtonGroup,
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
