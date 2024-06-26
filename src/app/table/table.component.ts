import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABBlock, GoABIcon, GoABTable, GoABTableSortHeader} from "@abgov/angular-components";
// import {GoABTableOnSortDetail} from "@abgov/ui-components-common";
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
  // imports: [
  //   GoABBlock,
  //   GoABTable,
  //   GoABTableSortHeader,
  //   GoABIcon,
  // ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableComponent {
  users: User[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 18, max: 60 }),
      });
    }
  }

  handleSort(event: any) {
    const { sortBy, sortDir } = event.detail;
    this.users.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? -1 : 1) * sortDir
    );
  }
}
