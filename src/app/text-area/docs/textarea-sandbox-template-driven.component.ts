import { Component } from "@angular/core";
import { GoabFormItem, GoabTextArea } from "@abgov/angular-components";
import { FormsModule } from "@angular/forms";
import { GoabTextAreaOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: 'app-textarea-sandbox-template-driven',
  templateUrl: './textarea-sandbox-template-driven.component.html',
  imports: [GoabFormItem, GoabTextArea, FormsModule],
  standalone: true,
})
export class TextareaSandboxTemplateDrivenComponent {
  item = "";
  textareaOnChange(event: GoabTextAreaOnChangeDetail) {
    // handle change
    this.item = event.value;
  }
}
