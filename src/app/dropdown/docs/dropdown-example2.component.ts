import {Component} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoabDropdown, GoabDropdownItem, GoabFormItem} from "@abgov/angular-components";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "app-dropdown-example2",
  standalone: true,
  templateUrl: "./dropdown-example2.component.html",
  imports: [
    ReactiveFormsModule,
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    NgForOf,
    NgIf
  ]
})
export class DropdownExample2Component {
  changeForm = new FormGroup({
    parentDropdown: new FormControl(""),
    childDropdown: new FormControl(""),
  });
  parents = ["All", "Big", "Small"];
  children = [""];

  childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
  childrenBig = ["Elephant", "Truck", "Bus"];
  childrenSmall = ["Key", "Pen", "Watch"];

  ngOnInit() {
    this.onChange();
  }

  onChange() {
    this.changeForm.get("parentDropdown")?.valueChanges
      .subscribe((value) => {
        console.log("value ", value);
        if (value === "All") this.children = this.childrenAll;
        else if (value === "Big") this.children = this.childrenBig;
        else this.children = this.childrenSmall;
      });
  }

  generateUniqueKey(index: number, item: string): string {
    return `${item}_${index}_${Math.random()}`;
  }
}
