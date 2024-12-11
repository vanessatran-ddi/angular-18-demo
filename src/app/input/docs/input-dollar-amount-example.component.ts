import {Component} from "@angular/core";
import {GoabFormItem, GoabInput} from "@abgov/angular-components";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-input-dollar-amount-example",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabInput
  ],
  templateUrl: "./input-dollar-amount-example.component.html"
})
export class InputDollarAmountExampleComponent {
  tuitionAmount: number|undefined;
  suppliesAmount: number|undefined;
  othersAmount: number|undefined;

  onChangeTuitionAmount(event: GoabInputOnChangeDetail) {
    this.tuitionAmount = +event.value;
  }
  onChangeSuppliesAmount(event: GoabInputOnChangeDetail) {
    this.suppliesAmount = +event.value;
  }
  onChangeOthersAmount(event: GoabInputOnChangeDetail) {
    this.othersAmount = +event.value;
  }
}
