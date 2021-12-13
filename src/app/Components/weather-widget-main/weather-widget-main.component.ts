import { Component, OnInit } from '@angular/core';
import { WeatherWidgetMainService } from './weather-widget-main.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData:any;
  currentDate: Date= new Date();
  constructor( private weatherService: WeatherWidgetMainService) { 
    
  }


  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    setInterval(()=> {
      this.currentDate= new Date();
    }, 1000)

    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    this.weatherService.getWeatherDetails().subscribe((response)=>{this.setWeatherData(response)})  
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
