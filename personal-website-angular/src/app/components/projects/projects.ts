import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Projects {

}
