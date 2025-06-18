import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Skills {

}
