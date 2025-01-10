import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
// import { GoABContainer, GoABDatePicker, GoABDropdown, GoABDropdownItem, GoABFormItem, GoABInput, GoABSpacer } from "@abgov/angular-components";
// import { GoABDatePickerOnChangeDetail, GoABDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { CommonModule } from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Countries, CountrySubdivisions} from "./countries.data";

type Task = {
  value: string;
  label: string;
  mount: string;
};

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    // GoABDropdown,
    // GoABDropdownItem,
    // GoABFormItem,
    // GoABContainer,
    // GoABDatePicker,
    // GoABInput,
    // GoABSpacer,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownComponent implements OnInit {
  colors: string[] = [];
  selectedColor = "red";
  boundVal = "";
  reactiveFormCtrl = new FormControl({ value: "green", disabled: true });

  color = new FormControl("green");

  provinces: string[] = [];

  /* eslint-disable @typescript-eslint/naming-convention */
  cities: Record<string, string[]> = {
    BC: ["Vancouver", "Kelowna", "Fernie"],
    Alberta: ["Edmonton", "Calgary"],
    Saskatchewan: ["Regina", "Saskatoon"],
    Manitoba: ["Winnipeg"],
    Ontario: ["Toronto", "Ottawa"],
    Quebec: ["Montreal", "Quebec City"],
  };

  pcities: string[] = [];

  isMobile = window.matchMedia("(any-pointer:coarse)").matches;
  disabled = false;

  groups = [
    {
      name: "Fruits",
      value: "banana",
      items: [{ value: "apple" }, { value: "orange" }, { value: "banana" }],
    },
    {
      name: "Vegetables",
      value: "carrot",
      items: [{ value: "brocolli" }, { value: "carrot" }, { value: "spinach" }],
    },
  ];

  countries = Countries;
  subdivisions = CountrySubdivisions;

  fg: FormGroup<{
    businessName: FormControl<string | null>;
    address1: FormControl<string | null>;
    address2: FormControl<string | null>;
    locality: FormControl<string | null>;
    region: FormControl<string | null>;
    country: FormControl<string | null>;
    postalCode: FormControl<string | null>;
  }>;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      businessName: [null as string | null, []],
      address1: [null as string | null, []],
      address2: [null as string | null, []],
      locality: [null as string | null, []],
      region: [null as string | null, []],
      country: [null as string | null, []],
      postalCode: [null as string | null, []],
    });
  }

  selectColor(event: Event) {
    console.log("Select Color", event);
    this.selectedColor = (event as CustomEvent).detail.value;
  }

  selectProvince(event: any) {
    this.pcities = this.cities[event.detail.value];
  }

  onChange(event: any) {
    console.log("onChange with event", event);
  }
  ngOnInit() {
    // this.colors = ["red", "green", "blue"]
   setTimeout(() => this.colors = ["red", "green", "blue"], 1);
    console.log("this.colors ", this.colors);
    // listen to fg changes
    this.fg.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
    });
  }


  // For mount

  tasks: Task[] = [
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" }
  ];
  newTask = "";
  mountType = "append";
  selectedTask = "";

  onMountTypeChange(event: Event) {
    this.mountType = (event as CustomEvent).detail.value;
  }
  onNewTaskChange(event: Event) {
    this.newTask = (event as CustomEvent).detail.value;
  }
  onSelectedTaskChange(event: Event) {
    this.selectedTask = (event as CustomEvent).detail.value;
  }
  addTask() {
    const task: Task = {
      label: this.newTask,
      value: this.newTask.toLowerCase().replace(' ', '-'),
      mount: this.mountType
    };
    this.tasks.push(task);
  }
}
