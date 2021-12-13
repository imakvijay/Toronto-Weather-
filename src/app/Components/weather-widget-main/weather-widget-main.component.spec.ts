import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetMainComponent } from './weather-widget-main.component';
import { WeatherWidgetMainService } from './weather-widget-main.service';

describe('WeatherWidgetMainComponent', () => {
  let component: WeatherWidgetMainComponent;
  let fixture: ComponentFixture<WeatherWidgetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetMainComponent ],
      imports : [HttpClientModule],
      providers : [
        WeatherWidgetMainService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update every second', () => {
    component.ngOnInit()
    
  });
});
