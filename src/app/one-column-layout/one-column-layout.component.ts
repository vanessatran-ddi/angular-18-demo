import { Component } from "@angular/core";
import {
  GoabAppFooter,
  GoabAppHeader,
  GoabColumnLayout,
  GoabGrid,
  GoabMicrositeHeader,
  GoabSkeleton
} from "@abgov/angular-components";

@Component({
  selector: 'app-one-column-layout-pattern-example',
  standalone: true,
  imports: [
    GoabColumnLayout,
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabSkeleton,
    GoabGrid,
    GoabAppFooter,
  ],
  templateUrl: './one-column-layout.component.html',
})
export class OneColumnLayoutComponent {}
