import { Component } from '@angular/core';
import {GoABSkeleton} from "@abgov/angular-components";

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [ GoABSkeleton,],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {

}
