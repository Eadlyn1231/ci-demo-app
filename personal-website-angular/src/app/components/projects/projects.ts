import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Projects {

}
