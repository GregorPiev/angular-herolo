import { Component, OnInit } from '@angular/core';
import { ForecastService } from './../../shared/forecast.service';
import { Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteForecast: Array<any>;
  constructor(
    private forecast: ForecastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.forecast.favoriteForecastFull.subscribe(result => {
      this.favoriteForecast = result;
    });
  }

  showValues(cityName: string) {
    this.forecast.changeCityName(cityName);
    this.forecast.changeMenuItem('home');
    this.router.navigate(['']);
  }

  deleteFromFavorites(cityName: string) {
    this.forecast.deleteFromFavorite(cityName);

  }
}
