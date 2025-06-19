import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Contact {

}
