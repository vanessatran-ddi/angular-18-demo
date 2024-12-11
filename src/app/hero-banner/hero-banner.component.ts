import { Component } from '@angular/core';
import {
  GoabButton,
  GoabButtonGroup, GoabDivider,
  GoabHeroBanner,
} from "@abgov/angular-components";
import {HeroBannerWithActionsComponent} from "./docs/hero-banner-with-actions.component";

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    GoabHeroBanner,
    GoabButton,
    GoabButtonGroup,
    HeroBannerWithActionsComponent,
    GoabDivider,
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
