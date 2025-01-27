import { Component } from "@angular/core";
import { GoabBlock, GoabIconButton, GoabTooltip } from "@abgov/angular-components";

@Component({
  selector: 'app-tooltip-click-to-copy-clipboard-example',
  templateUrl: './tooltip-click-to-copy-clipboard-example.component.html',
  imports: [GoabBlock, GoabTooltip, GoabIconButton],
  standalone: true,
})
export class TooltipClickToCopyClipboardExampleComponent {
  isCopied = false;

  copyCode() {
    const codeToCopy = "$goa-color-interactive-default";
    navigator.clipboard.writeText(codeToCopy).then(() => {
      this.isCopied = true;
      setTimeout(() => this.isCopied = false, 1000);
    });
  }
}
