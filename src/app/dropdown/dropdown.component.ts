import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabContainer,
  GoabDatePicker,
  GoabDivider,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabSpacer
} from "@abgov/angular-components";
import { GoabDatePickerOnChangeDetail, GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { CommonModule } from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Countries, CountrySubdivisions} from "./countries.data";
import {DropdownSandboxComponent} from "./docs/dropdown-sandbox.component";
import {DropdownExample1Component} from "./docs/dropdown-example1.component";
import {DropdownExample2Component} from "./docs/dropdown-example2.component";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    GoabDropdown,
    GoabDropdownItem,
    GoabFormItem,
    GoabContainer,
    GoabDatePicker,
    GoabInput,
    GoabSpacer,
    ReactiveFormsModule,
    CommonModule,
    DropdownSandboxComponent,
    DropdownSandboxComponent,
    GoabDivider,
    DropdownExample1Component,
    DropdownExample2Component,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownComponent {
  colors: string[] = [];
  selectedColor = "red";
  boundVal = "";
  reactiveFormCtrl = new FormControl({ value: "green", disabled: false });
  disabledFormCtrl = new FormControl({ value: "green", disabled: true });

  dropdownCtrl = new FormControl('');
  form = new FormGroup({
    option: new FormControl('')
  });

  item = new Date();
  onChange(e: GoabDatePickerOnChangeDetail) {
    // handle change
    console.log(e);
  }

  ngOnInit() {
    console.log("setting colors in 3 secs")
    setTimeout(() => this.colors = ["Chris", "James", "John"], 3000);
  }

  color = new FormControl("green");

  provinces: string[] = [
    "BC",
    "Alberta",
    "Saskatchewan",
    "Manitoba",
    "Ontario",
    "Quebec",
  ];

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
      businessName: [null as (string | null), []],
      address1: [null as (string | null), []],
      address2: [null as (string | null), []],
      locality: [null as (string | null), []],
      region: [null as (string | null), []],
      country: [null as (string | null), []],
      postalCode: [null as (string | null), []]
    });
  }

  selectColor(event: GoabDropdownOnChangeDetail) {
    console.log("Select Color", event);
    this.selectedColor = event.value || "";
  }

  selectProvince(event: any) {
    this.pcities = this.cities[event.detail.value];
  }

  handleSelectChange(event: any) {
    console.log("select change", event.detail.value, event);
  }

  public readonly fruits = [
    { value: "ghi789", label: "Cherry" },
    { value: "jkl012", label: "Date" },
    { value: "mno345", label: "Elderberry" },
    { value: "pqr678", label: "Fig" },
    { value: "stu901", label: "Grape" },
    { value: "vwx234", label: "Honeydew" },
    { value: "yza567", label: "Kiwi" },
    { value: "bcd890", label: "Lemon" }
  ];

  options = [
    {
      value: 'All',
      displayValue: 'All',
    },
    {
      value: 'One',
      displayValue: 'One',
    },
    {
      value: 'Two',
      displayValue: 'Two',
    }
  ];

  onChangeDropdown(e: GoabDropdownOnChangeDetail) {
    console.log(e)
  }
}
