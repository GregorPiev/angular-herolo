import { Component, OnInit } from '@angular/core';
import { ForecastService } from './../../../shared/forecast.service';
import { Observable } from 'rxjs';
import { Forecast } from 'src/app/shared/interface.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityName: string;
  errorMessage: string;
  constructor(private forecast: ForecastService) { }

  ngOnInit() {
    this.forecast.cityName.subscribe(result => {
      this.cityName = result || 'Tel Aviv';
    });
    this.errorMessage = '';
    this.applyFilter();
  }
  applyFilter() {
    this.forecast.changeCityName(this.cityName);
    this.forecast.getCityForecastData(this.cityName)
      .subscribe((resValue) => {
        const periodForecast = resValue;
        this.cityName = '';
        this.forecast.changePeriodForecast(periodForecast);
        this.errorMessage = '';
      },
        (err) => {
          this.errorMessage = 'Invalid City Name';
          this.forecast.changeCityName('error');
        });
  }

}
