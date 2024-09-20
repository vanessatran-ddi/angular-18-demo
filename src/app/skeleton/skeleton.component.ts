import { Component } from '@angular/core';
import {GoabSkeleton} from "@abgov/angular-components";

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [ GoabSkeleton,],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {

}
