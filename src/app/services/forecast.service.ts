import { inject, Injectable } from '@angular/core';
import { ForecastOptions } from '../entities/forecast-options.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ForecastTemperatureResponse } from '../entities/forecast-api.type';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {
    private readonly httpClient = inject(HttpClient);

    public getForecastTemperature(code: ForecastOptions): Observable<ForecastTemperatureResponse> {
        return this.httpClient.get<ForecastTemperatureResponse>(`https://api.weather.gov/gridpoints/${code}/31,80/forecast`);
    }
}