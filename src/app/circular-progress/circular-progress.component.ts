import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GoABButton, GoABCircularProgress} from "@abgov/angular-components";

@Component({
  selector: 'app-circular-progress',
  standalone: true,
  imports: [
    GoABCircularProgress,
    GoABButton
  ],
  templateUrl: './circular-progress.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CircularProgressComponent {
  progress = 0;
  message = "Progress starting";

  fullScreenProgress = 0;
  fullScreenMessage = "Progress starting";

  fullscreenInfiniteVisible = false;
  showFullscreenInfiniteInterval: any;

  fullscreenProgressVisible = false;
  showFullscreenProgressInterval: any;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.progress >= 100) {
        this.progress = 0;
      } else {
        this.progress += 10;
      }
      this.message = "Progress at " + this.progress;

      if (this.fullScreenProgress >= 100) {
        this.fullScreenProgress = 0;
        this.fullscreenProgressVisible = false;
      } else {
        this.fullScreenProgress += 10;
      }
      this.fullScreenMessage = "Progress at " + this.fullScreenProgress;
    }, 1000);
  }

  showFullscreenInfinite() {
    this.fullscreenInfiniteVisible = true;

    this.showFullscreenInfiniteInterval = setInterval(() => {
      this.fullscreenInfiniteVisible = false;
      clearInterval(this.showFullscreenInfiniteInterval);
    }, 3000);
  }

  showFullscreenProgress() {
    this.fullscreenProgressVisible = true;
  }
}
