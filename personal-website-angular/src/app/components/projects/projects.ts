import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Projects {

}
