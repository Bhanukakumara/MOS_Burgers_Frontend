import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { MainComponent } from '../components/main/main.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
