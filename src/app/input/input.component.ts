import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
// import {GoABBadge, GoABDatePicker, GoABFormItem, GoABInput} from "@abgov/angular-components";
import {JsonPipe} from "@angular/common";
import { format, parseISO } from "date-fns";
interface User {
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    // GoABInput,
    // GoABDatePicker,
    // GoABBadge,
    // GoABFormItem,
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponent implements OnInit {

  minDate1 = new Date().toISOString();
  maxDate1 = new Date().toISOString();

  public formGroup1 = new FormGroup({
    isApplyingOnBehalf: new FormControl(null, { validators: [Validators.required] }),
    isInAlberta: new FormControl(null, { validators: [Validators.required] }),
    immigrationStatus: new FormControl(null, { validators: [Validators.required] }),
    birthDate: new FormControl("", { validators: [Validators.required] }),
  });


  formGroup = new FormGroup({
    firstInput: new FormControl(""),
    secondInput: new FormControl(""),
  });
  testFormCtrl = new FormControl("test");
  date = new Date();
  boundDate = format(this.date, "yyyy-MM-dd");
  formatDate = format(this.date, "yyyy-MM-dd");
  time = format(this.date, "HH:mm:ss");
  dateTime = format(this.date, "yyyy-MM-dd HH:mm");
  minDate = format(this.date, "yyyy-MM-dd");
  maxDate = format(this.getDateWithMonthOffset(1), "yyyy-MM-dd");

  reactiveDate2FormCtrl = new FormControl(new Date());

  wcVal = "event bound";
  tempDrivenVal = "template bound";
  reactiveFormCtrl = new FormControl("reactive form");
  reactiveDateFormCtrl = new FormControl(format(this.date, "yyyy-MM-dd"));
  reactiveTimeFormCtrl = new FormControl(this.time);
  sliderVal = 50;
  dateVal = format(this.date, "yyyy-MM-dd");
  arrayVal = undefined;

  users: User[] = [];

  value= "";

  tuitionAmount: number|undefined;
  suppliesAmount: number|undefined;
  othersAmount: number|undefined;

  onChangeTuitionAmount(event: Event) {
    this.tuitionAmount = (event as CustomEvent).detail.value as number;
  }
  onChangeSuppliesAmount(event: Event) {
    this.suppliesAmount = (event as CustomEvent).detail.value as number;
  }
  onChangeOthersAmount(event: Event) {
    this.othersAmount = (event as CustomEvent).detail.value as number;
  }


  onChange(event: Event) {
    this.value = (event as CustomEvent).detail.value;
  }
  getUser() {
    console.log("getting user");
    return {
      firstName: getFirstName(),
      lastName: getLastName(),
      age: getAge(),
    };
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.users.push(this.getUser());
    }
  }

  updateInput(event: any) {
    this.wcVal = event.detail.value;
  }

  getDateWithMonthOffset(offset: number) {
    const d = new Date();
    d.setMonth(d.getMonth() + offset);
    return d;
  }

  onInputChangeEvent(event: any) {
    console.log("onEvent", event.detail);
  }

  onFocusEvent(event: any) {
    console.log("on Focus Event: ", event.detail);
  }

  onBlurEvent(event: any) {
    console.log("on Blur Event: ", event.detail);
  }

  onKeyPressEvent(event: any) {
    console.log("on Key Press Event: ", event.detail);
  }

  setDate(event: any) {
    const raw = event.detail.value;
    if (!raw) {
      return;
    }
    const d = parseISO(raw);
    this.boundDate = format(d, "yyyy-MM-dd");
  }

  handleTrailingIconClick() {
    console.log("handleTrailingIconClick");
  }
}

function getFirstName(): string {
  const index = Math.floor(Math.random() * (firstNames.length - 1));
  return firstNames[index];
}

function getLastName(): string {
  const index = Math.floor(Math.random() * (lastNames.length - 1));
  return lastNames[index];
}

function getAge(): number {
  return 18 + Math.floor(Math.random() * 60);
}

const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Charles",
  "Josep",
  "Thomas",
  "Christopher",
  "Daniel",
  "Paul",
  "Mark",
  "Donald",
  "Georg",
  "Kenneth",
  "Steve",
  "Edward",
  "Brian",
  "Ronald",
  "Anthon",
  "Kevin",
  "Jason",
  "Matthew",
  "Gary",
  "Timothy",
  "Jose",
  "Larry",
  "Jeffrey",
  "Frank",
  "Scot",
  "Eric",
  "Stephen",
  "Andrew",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Thompson",
  "White",
  "Harris",
];
