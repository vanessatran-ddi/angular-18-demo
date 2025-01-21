import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";
import { GoabPagination, GoabTable } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";
import {
  GoabPaginationOnChangeDetail,
} from '@abgov/ui-components-common';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-paginate-sandbox-example',
  templateUrl: './paginate-sandbox-example.component.html',
  imports: [
    GoabTable,
    GoabPagination,
    GoabTable,
    NgForOf,
    GoabPagination,
    GoabPagination,
  ],
  standalone: true,
})
export class PaginateSandboxExampleComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page: number = 1;
  perPage: number = 10;

  handlePageChange(event: GoabPaginationOnChangeDetail) {
    this.page = event.page;
    const offset = (this.page - 1) * this.perPage;
    this.pageUsers = this.users.slice(offset, offset + this.perPage);
  }
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 18, max: 60 }),
      });
    }
    this.pageUsers = this.users.slice(0, this.perPage);
  }
}
