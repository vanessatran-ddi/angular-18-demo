// import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from "@angular/core";
// import { RouterOutlet } from "@angular/router";

// @Component({
//   selector: "app-user",
//   template: `
//     @if (isLoggedIn) {
//       Welcome, {{username}}
//     }
//     {{occupation}}
//   `,
//   standalone: true,
// })
// export class UserComponent {
//   @Input() occupation = "";
//   isLoggedIn = true;
//   username = "vanessa";
// }
//
// @Component({
//   selector: 'app-child',
//   styles: `.btn { padding: 5px; }`,
//   template: `
//     <button class="btn" (click)="addItem()">Add Item</button>
//   `,
//   standalone: true,
// })
// export class ChildComponent {
//   @Output() addItemEvent = new EventEmitter<string>();
//   count = 0;
//   addItem() {
//     this.addItemEvent.emit('🐢');
//   }
// }
//
// @Component({
//   selector: 'comments',
//   template: `
//     <ul>
//       <li>Building for the web is fantastic!</li>
//       <li>The new template syntax is great</li>
//       <li>I agree with the other comments!</li>
//     </ul>
//   `,
//   standalone: true,
// })
// export class CommentsComponent {}
//
// @Component({
//   selector: 'app-demo',
//   template: `
//     <app-user occupation="Angular developer"/>
//     @for (os of operatingSystems; track os) {
//       <li>{{os}}</li>
//     }
//     <div [contentEditable]="isEditable"></div>
//     <button (click)="greet()">Hello</button>
//     <section (mouseover)="onMouseOver()">A secret message {{message}}</section>
//     <app-child (addItemEvent)="addItem($event)"></app-child>
//     <p>🐢 all the way down {{ items.length }}</p>
//
//     <article>
//       <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//       <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
//       <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//       <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
//       <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//       <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
//     </article>
//     @defer {
//       <comments />
//     } @placeholder {
//       <p>Future comments</p>
//     } @loading(minimum 2s) {
//       <p>Loading comments .... </p>
//     }
//   `,
//   imports: [UserComponent, ChildComponent, CommentsComponent],
//   standalone: true,
// })
// export class AppDemoComponent {
//   city = "San Francisco";
//   operatingSystems = ["MacOS", "Windows", "Linux"];
//   isEditable = true;
//   message ="";
//   items = new Array();
//
//   addItem(item: string) {
//     this.items.push(item);
//   }
//
//   greet() {
//     console.log("Hello there");
//   }
//   onMouseOver() {
//     this.message = "Hello!";
//   }
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   standalone: true,
//   imports: [RouterOutlet],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class AppComponent {}

// import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// import { RouterOutlet } from "@angular/router";
// import { provideZoneChangeDetection } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   standalone: true,
//   imports: [RouterOutlet],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   providers: [provideZoneChangeDetection({ eventCoalescing: true })]
// })
// export class AppComponent {}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
