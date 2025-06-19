import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class About {

}
