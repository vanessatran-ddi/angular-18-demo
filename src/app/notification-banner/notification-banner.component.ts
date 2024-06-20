import { Component } from '@angular/core';
import {GoABNotificationBanner} from "@abgov/angular-components";

@Component({
  selector: 'app-notification-banner',
  standalone: true,
  imports: [GoABNotificationBanner,],
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.css'
})
export class NotificationBannerComponent {
  onDismiss() {
    console.log("dismissed");
  }
}
