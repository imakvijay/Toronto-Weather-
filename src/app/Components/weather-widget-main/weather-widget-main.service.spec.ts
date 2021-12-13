import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherWidgetMainService } from './weather-widget-main.service';

describe('WeatherWidgetMainService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    }).compileComponents();
  }))
  it('should be created', () => {
    const service: WeatherWidgetMainService = TestBed.get(WeatherWidgetMainService);
    expect(service).toBeTruthy();
  });
});
