import { Component } from '@angular/core';
import {GoABBlock, GoABIcon, GoABTable, GoABTableSortHeader} from "@abgov/angular-components";
import {GoABTableOnSortDetail} from "@abgov/ui-components-common";
import {faker} from "@faker-js/faker";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    GoABBlock,
    GoABTable,
    GoABTableSortHeader,
    GoABIcon,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users: User[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }
  }

  handleSort(event: GoABTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? -1 : 1) * sortDir
    );
  }
}
