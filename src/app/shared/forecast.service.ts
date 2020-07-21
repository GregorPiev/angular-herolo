import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe, Subject, BehaviorSubject, throwError, of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Forecast } from '../shared/interface.model';
import { data } from '../shared/data.module';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public periodForecast: Forecast;

  private typeTemperatureSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private periodForecastSource: BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>(this.periodForecast);
  private cityNameSource: BehaviorSubject<string> = new BehaviorSubject('');
  private favoriteForecastFullSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  private menuToggleSource = new BehaviorSubject('home');

  currentPeriodForecast = this.periodForecastSource.asObservable();
  typeTemperature = this.typeTemperatureSource.asObservable();
  cityName = this.cityNameSource.asObservable();
  favoriteForecastFull = this.favoriteForecastFullSource.asObservable();
  menuToggle = this.menuToggleSource.asObservable();
  public getCityForecastData(city: string): Observable<Forecast> {
    const result = Object.values(data).filter(item => {
      const curItem = item;
      return curItem.Headline.City.toLowerCase() === city.toLowerCase();
    });
    if (result.length) {
      return from(result);
    } else {
      return throwError('error');
    }


    /* const url = `${environment.accuweather}/locations/v1/cities/search?apikey=${environment.APIKey}&q=${city}`;
    const urlForecast = `${environment.accuweather}/forecasts/v1/daily/5day/`; */
    /* return this.http.get(url)
      .pipe(
        map((response: Response) => {
          if (response[0]) {
            return response[0].Key;
          } else {
            return null;
          }
        }),
        switchMap(keyLoc => {
          console.log('keyLoc:', keyLoc);
          return this.http.get(urlForecast + keyLoc + `?apikey=${environment.APIKey}`)
            .pipe(
              catchError(error => {
                console.log('Error server:', error);
                return throwError(error.message);
              }),
              map((result: any) => {
                return result;
              })
            );
        }),

      ); */
  }
  public changePeriodForecast(message: Forecast) {
    this.periodForecastSource.next(message);
  }

  public changeTypeTemperature(value: boolean) {
    this.typeTemperatureSource.next(value);
  }

  public changeCityName(name: string) {
    this.cityNameSource.next(name);
  }

  public changeMenuItem(value: string) {
    this.menuToggleSource.next(value);
  }

  public putIntoFavorite(forecast: any, cityName: string, cityTemp: string, cloudsType: string) {
    const currentValue = this.favoriteForecastFullSource.value;
    const length = currentValue.length;
    const dataObject = {
      id: (length + 1),
      forecast,
      cityName,
      cityTemp,
      cloudsType
    };

    const updatedValue = [...currentValue, dataObject];
    this.favoriteForecastFullSource.next(updatedValue);
  }

  public deleteFromFavorite(cityName: string) {
    const result = Object.values(this.favoriteForecastFullSource.value).filter(item => {
      return item.cityName.toLowerCase() !== cityName.toLowerCase();
    });
    this.favoriteForecastFullSource.next(result);
  }


}
