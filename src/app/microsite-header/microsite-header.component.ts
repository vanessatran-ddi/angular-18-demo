import { Component } from '@angular/core';
import {GoabMicrositeHeader} from "@abgov/angular-components";

@Component({
  selector: 'app-microsite-header',
  standalone: true,
  imports: [GoabMicrositeHeader,],
  templateUrl: './microsite-header.component.html',
  styleUrl: './microsite-header.component.css'
})
export class MicrositeHeaderComponent {

}
