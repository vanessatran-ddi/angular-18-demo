import { Component } from '@angular/core';
import {GoABMicrositeHeader} from "@abgov/angular-components";

@Component({
  selector: 'app-microsite-header',
  standalone: true,
  imports: [GoABMicrositeHeader,],
  templateUrl: './microsite-header.component.html',
  styleUrl: './microsite-header.component.css'
})
export class MicrositeHeaderComponent {

}
