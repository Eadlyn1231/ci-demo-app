import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Skills {

}
