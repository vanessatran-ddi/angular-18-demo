import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
// import {emailValidator, SINValidator } from "@abgov/angular-components";
import {FormControl} from "@angular/forms";

type Task = {
  value: string;
  label: string;
  mount: string;
};
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './some-component.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SomeComponent {
  tasks: Task[] = [
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" }
  ];
  newTask = "";
  mountType = "append";
  selectedTask = "";
  taskErrorMessage = "";
  isDisabled = false;

  taskFormControl = new FormControl("test");


  onMountTypeChange(event: Event) {
    this.mountType = (event as CustomEvent).detail.value;
  }

  onNewTaskChange(event: Event) {
    this.newTask = (event as CustomEvent).detail.value;
    // const validate = SINValidator();
    // console.log("SINValidator", validate(this.newTask));
    // const emailValidate = emailValidator();
    // console.log("emailValidator", emailValidate(this.newTask));
  }

  onSelectedTaskChange(event: Event) {
    this.selectedTask = (event as CustomEvent).detail.value;
  }

  addTask() {
    if (this.newTask === "") {
      this.taskErrorMessage = "Please enter a task name";
      return;
    }
    this.taskErrorMessage = "";
    const task: Task = {
      label: this.newTask,
      value: this.newTask.toLowerCase().replace(' ', '-'),
      mount: this.mountType
    };
    this.tasks.push(task);
  }

  disableOrEnable() {
    this.isDisabled = !this.isDisabled;
  }
}
