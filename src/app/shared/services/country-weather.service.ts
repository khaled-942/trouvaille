import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryWeatherService {
  constructor() { }
  _http = inject(HttpClient);

  getWeatherByCountry(country: string): Observable<any> {
    const params = new HttpParams()
      .set('q', country)
      .set('appid', environment.apiKey)
      .set('units', 'metric');

    return this._http.get(environment.apiUrl, { params });
  }
}
