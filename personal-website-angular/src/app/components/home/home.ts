import { Component } from '@angular/core';
import { fadeAnimation, slideInAnimation } from '../../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [fadeAnimation, slideInAnimation],
  host: { '[@fadeAnimation]': '', '[@slideInAnimation]': '' }
})
export class Home {

}
