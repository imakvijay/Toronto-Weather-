import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetMainService {

  constructor(private http:HttpClient) { }

  public getWeatherDetails(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=189504d2ff9e656c85e25fee5495eb98')
  }
}
