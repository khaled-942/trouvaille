import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowLandMarksService {
  showPanel = new BehaviorSubject(false);
  showPanelObs = this.showPanel.asObservable();
  weatherData = new BehaviorSubject({});
  weatherDataObs = this.weatherData.asObservable();
  error = new BehaviorSubject(0);
  errorObs = this.error.asObservable();
  constructor() {}

  swithPanelStatus(status: boolean) {
    this.showPanel.next(status);
  }

  weatherDataInfo(data: Object) {
    this.weatherData.next(data);
  }

  errorDataInfo(data: number) {
    this.error.next(data);
  }
}
