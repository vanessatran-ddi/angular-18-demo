import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
// import {GoABBadge, GoABBlock, GoABButton, GoABContainer} from "@abgov/angular-components";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    // GoABContainer,
    // GoABBlock,
    // GoABBadge,
    // GoABButton
  ],
  templateUrl: './container.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerComponent implements OnInit {
  reactiveFormCtrl = new FormControl({ value: "green", disabled: true });
  colors: string[] = ["red", "green", "blue"];
  text: string;
  constructor() {
    this.text = "";
  }
  public ngOnInit() {
    setTimeout(() => this.text = "Dynamic content here", 3000);
  }
}
