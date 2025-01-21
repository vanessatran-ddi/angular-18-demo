import { Component } from "@angular/core";
import { GoabFormItem, GoabTextArea } from "@abgov/angular-components";
import { GoabTextAreaOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-textarea-sandbox-event-based',
  templateUrl: './textarea-sandbox-event-base.component.html',
  imports: [GoabFormItem, GoabTextArea],
  standalone: true,
})
export class TextareaSandboxEventBaseComponent {
  value: string = '';
  textareaOnChange(event: GoabTextAreaOnChangeDetail) {
    // handle change
    this.value = event.value;
  }
}
