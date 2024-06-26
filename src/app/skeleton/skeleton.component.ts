import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {GoABSkeleton} from "@abgov/angular-components";

@Component({
  selector: 'app-skeleton',
  standalone: true,
  // imports: [ GoABSkeleton,],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonComponent {

}
