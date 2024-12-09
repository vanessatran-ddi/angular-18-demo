import {Component} from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer, GoabDivider, GoabDropdown, GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem
} from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail, GoabInputOnChangeDetail, GoabDropdownItemMountType} from "@abgov/ui-components-common";
import {NgForOf, NgIf} from "@angular/common";
interface Task {
  value: string;
  label: string;
  mount: GoabDropdownItemMountType;
}
@Component({
  selector: "app-dropdown-example1",
  standalone: true,
  templateUrl: "./dropdown-example1.component.html",
  imports: [
    GoabContainer,
    GoabFormItem,
    GoabInput,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabButtonGroup,
    GoabButton,
    GoabDivider,
    GoabDropdown,
    GoabDropdownItem,
    NgForOf,
    NgIf
  ]
})
export class DropdownExample1Component {
  tasks: Task[] = [
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" },
  ];
  newTask = "";
  mountType: GoabDropdownItemMountType = "append";
  selectedTask = "";
  taskError = false;
  renderTrigger = true;
  constructor() {}
  onMountTypeChange(event: GoabDropdownOnChangeDetail): void {
    this.mountType = event.value as GoabDropdownItemMountType;
  }

  onNewTaskChange(event: GoabInputOnChangeDetail): void {
    this.newTask = event.value;
    this.taskError = false;
  }
  onSelectedTaskChange(event: GoabDropdownOnChangeDetail): void {
    this.selectedTask = event.value as string;
  }
  addTask(): void {
    if (this.newTask === "") {
      this.taskError = true;
      return;
    }
    this.taskError = false;
    const task: Task = {
      label: this.newTask,
      value: this.newTask.toLowerCase().replace(" ", "-"),
      mount: this.mountType,
    };
    this.tasks =
      this.mountType === "prepend" ? [task, ...this.tasks] : [...this.tasks, task];
    this.newTask = "";
  }
  reset(): void {
    this.newTask = "";
    this.selectedTask = "";
    this.taskError = false;
    this.tasks = [];
    this.forceRerender();
  }
  forceRerender(): void {
    this.renderTrigger = false;
    setTimeout(() => {
      this.renderTrigger = true;
    }, 0);
  }
  trackByFn(index: number, item: Task): string {
    return item.value;
  }
}
