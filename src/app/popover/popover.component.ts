import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
// import {
//   GoABBlock,
//   GoABButton,
//   GoABButtonGroup,
//   GoABPopover,
//   GoABSpacer
// } from "@abgov/angular-components";

@Component({
  selector: 'app-popover',
  standalone: true,
  // imports: [GoABPopover,
  //   GoABButton,
  //   GoABButtonGroup,
  //   GoABBlock,
  //   GoABSpacer,],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverComponent implements OnInit {
  text: string;
  constructor() {
    this.text = "";
  }

  onClick() {
    console.log("clicked");
  }
  public ngOnInit() {
    setTimeout(() => this.text = "dynamic content ", 3000);
  }
}
