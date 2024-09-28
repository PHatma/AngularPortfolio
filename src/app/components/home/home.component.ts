import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title: string = ' Front end Web developer';
  color: string = 'black';
}
