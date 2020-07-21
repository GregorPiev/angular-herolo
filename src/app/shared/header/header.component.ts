import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForecastService } from './../forecast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleMenu = 'home';
  constructor(
    private router: Router,
    private forecast: ForecastService
  ) { }

  ngOnInit() {
    this.forecast.menuToggle.subscribe(res => {
      this.toggleMenu = res;
    })
  }

  goToHome() {
    this.router.navigate(['']);
    this.toggleMenu = 'home';
    this.forecast.changeMenuItem('home');

  }

  goToFavorites() {
    this.router.navigate(['favorites']);
    this.forecast.changeMenuItem('favorite');
  }

}
