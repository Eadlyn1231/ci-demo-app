import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Home {

}
