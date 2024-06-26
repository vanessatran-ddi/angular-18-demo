import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABPagination, GoABTable} from "@abgov/angular-components";
// import {GoABPaginationOnChangeDetail} from "@abgov/ui-components-common";
import { faker } from "@faker-js/faker";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-paginate',
  standalone: true,
  // imports: [GoABPagination,
  //   GoABTable,],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginateComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;

  handlePageChange(event: Event) {
    const e = event as CustomEvent;
    this.page = e.detail.page;

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
