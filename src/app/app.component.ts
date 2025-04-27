import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MOS Burgers';
}
