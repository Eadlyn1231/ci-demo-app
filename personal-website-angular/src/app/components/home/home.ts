import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Home {

}
