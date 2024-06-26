import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABMicrositeHeader} from "@abgov/angular-components";

@Component({
  selector: 'app-microsite-header',
  standalone: true,
  // imports: [GoABMicrositeHeader,],
  templateUrl: './microsite-header.component.html',
  styleUrl: './microsite-header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicrositeHeaderComponent {

}
