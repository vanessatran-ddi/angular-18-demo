import { Component } from '@angular/core';
import {GoabIconButton} from "@abgov/angular-components";

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [ GoabIconButton,],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  onClick() {
    console.log('clicked')
  }
}
