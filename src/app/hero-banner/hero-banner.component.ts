import { Component } from '@angular/core';
import {
  GoabButton,
  GoabButtonGroup,
  GoabHeroBanner,
} from "@abgov/angular-components";

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    GoabHeroBanner,
    GoabButton,
    GoabButtonGroup,
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
