import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";
import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabPagination,
  GoabSpacer,
  GoabTable
} from "@abgov/angular-components";
import { NgForOf } from "@angular/common";
import { GoabDropdownOnChangeDetail, GoabPaginationOnChangeDetail } from "@abgov/ui-components-common";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-paginate-show-x-per-page-example',
  templateUrl: './paginate-show-x-per-page-example.component.html',
  imports: [
    GoabTable,
    NgForOf,
    GoabBlock,
    GoabDropdown,
    GoabDropdownItem,
    GoabSpacer,
    GoabPagination,
  ],
  standalone: true,
})
export class PaginateShowXPerPageExampleComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;
  perPage = 10;
  total = 100;

  handlePageChange(event: GoabPaginationOnChangeDetail) {
    this.page = event.page;

    const offset: number = (this.page - 1) * this.perPage;
    this.pageUsers = this.users.slice(offset, offset + this.perPage);
  }

  handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
    this.page = 1;
    this.perPage = Number(event.value);

    this.pageUsers = this.users.slice(0, this.perPage);
  }

  constructor() {
    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
  }

  prepareUsers() {
    for (let i = 0; i < this.total; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 18, max: 60 }),
      });
    }

    return this.users;
  }
}
