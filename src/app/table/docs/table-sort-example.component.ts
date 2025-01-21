import { Component } from "@angular/core";
import { GoabTable, GoabTableSortHeader } from "@abgov/angular-components";
import { NgForOf } from "@angular/common";
import { GoabTableOnSortDetail } from "@abgov/ui-components-common";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-table-sort-example',
  templateUrl: './table-sort-example.component.html',
  imports: [GoabTable, GoabTableSortHeader, NgForOf],
  standalone: true,
})
export class TableSortExampleComponent {
  users: User[] = [];

  constructor() {
    this.users = [
      {
        firstName: 'Christian',
        lastName: 'Batz',
        age: 18,
      },
      {
        firstName: 'Brain',
        lastName: 'Wisozk',
        age: 19,
      },
      {
        firstName: 'Neha',
        lastName: 'Jones',
        age: 23,
      },
      {
        firstName: 'Tristin',
        lastName: 'Buckridge',
        age: 31,
      },
    ];
  }

  handleSort(event: GoabTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
    );
  }
}
