import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {GoabBadge, GoabBlock, GoabButton, GoabContainer} from "@abgov/angular-components";
import { ContainerDocsComponent } from "./docs/container-docs.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    GoabContainer,
    GoabBlock,
    GoabBadge,
    GoabButton,
    ContainerDocsComponent,
  ],
  templateUrl: './container.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContainerComponent implements OnInit {
  users: string[] = [];

  constructor() {}

  ngOnInit() {
    console.log('setting colors in 3 secs');
    setTimeout(() => (this.users = ['Chris', 'James', 'John']), 2000);
  }
}
