import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from './../../../shared/forecast.service';
import { Forecast } from 'src/app/shared/interface.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  cloudsType = '';
  selectedForecast: Forecast;
  selectedForecastFull: Forecast;
  toggleType: boolean;
  cityName: string = 'Tel Aviv';
  cityTemp: string = '18C';
  constructor(
    private forecast: ForecastService
  ) { }

  ngOnInit() {
    this.forecast.typeTemperature.subscribe(result => {
      this.toggleType = result;
    });


    this.forecast.currentPeriodForecast.subscribe(message => {

      this.selectedForecastFull = message;
      const { ...Headline } = { ...message.Headline };
      const { ...DailyForecasts } = { ...message.DailyForecasts };
      this.cloudsType = Headline.Text;

      this.selectedForecast = message.DailyForecasts;


      if (!!DailyForecasts[0]) {
        this.cityTemp = ' ' + Math.round(((+DailyForecasts[0].Temperature.Maximum.Value - 32) * 5.0) / 9.0);
      }

    });

    this.forecast.cityName.subscribe(response => {
      if (response === 'error') {
        this.cityName = '';
      } else {
        this.cityName = response;
      }

    });
  }

  toggleFavorite() {
    this.forecast.putIntoFavorite(this.selectedForecastFull, this.cityName, this.cityTemp, this.cloudsType);

  }
  toggleTypeTemperature() {
    this.forecast.changeTypeTemperature(!this.toggleType);
  }

}
