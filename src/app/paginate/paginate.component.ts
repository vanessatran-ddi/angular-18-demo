import { Component } from '@angular/core';
import { GoabDivider, GoabPagination, GoabTable } from "@abgov/angular-components";
import {GoabPaginationOnChangeDetail} from "@abgov/ui-components-common";
import { faker } from "@faker-js/faker";
import { PaginateSandboxExampleComponent } from "./docs/paginate-sandbox-example.component";
import { PaginateShowXPerPageExampleComponent } from "./docs/paginate-show-x-per-page-example.component";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [
    GoabPagination,
    GoabTable,
    PaginateSandboxExampleComponent,
    GoabDivider,
    PaginateShowXPerPageExampleComponent,
  ],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.css',
})
export class PaginateComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;

  handlePageChange(e: GoabPaginationOnChangeDetail) {
    this.page = e.page;

    const offset = (this.page - 1) * 10;
    this.pageUsers = this.users.slice(offset, offset + 10);
  }

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }

    this.pageUsers = this.users.slice(0, 10);
  }
}
