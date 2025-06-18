import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class Contact {

}
