import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {AngularComponentsModule} from "@abgov/angular-components";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
// import {GoABCheckboxOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    // AngularComponentsModule
  ],
  templateUrl: './checkbox.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  checked = false;
  itemFormCtrl = new FormControl();
  onChange(event: Event) {
    const {name, checked, value} = (event as CustomEvent).detail;
    console.log("CheckboxComponent.onChange", {name, checked, value});
    this.checked = !this.checked;
    // or this.checked = !this.checked;
  }
}
