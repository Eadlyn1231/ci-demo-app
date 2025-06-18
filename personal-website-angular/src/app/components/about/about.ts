import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class About {

}
