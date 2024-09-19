import { Component, inject, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { ActivatedRoute } from '@angular/router';
import { forecastOptions, ForecastOptions } from '../entities/forecast-options.type';
import { ForecastTemperaturePeriod, ForecastTemperatureResponse } from '../entities/forecast-api.type';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    providers: [DatePipe]
})
export class WeatherComponent implements OnInit {
    private readonly forecastService = inject(ForecastService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly datePipe = inject(DatePipe);
    public code: ForecastOptions | undefined;
    public labels: string[] = [];
    public values: number[] = [];
    public extraData: ForecastTemperaturePeriod[] = [];
    public temperatureUnit = '';

    ngOnInit(): void {
        const param = this.activatedRoute.snapshot.params['code'];

        if(!forecastOptions.includes(param)) {
            throw new Error('Invalid forecast option');
        }

        this.code = param;

        this.forecastService.getForecastTemperature(param).subscribe({
            next: (response) => {
                this.temperatureUnit = response.properties.periods[0].temperatureUnit;
                this.buildChartData(response);
            },
            error: (error) => {
                console.error(error);
            }
        })
    }

    private buildChartData(forecastTempeartureData: ForecastTemperatureResponse): void {
        this.labels = forecastTempeartureData.properties.periods.map((period) => {
            const dateLabel = this.datePipe.transform(new Date(period.startTime), 'MM-dd');
            return `${period.name} ${dateLabel}`;
        });
        this.values = forecastTempeartureData.properties.periods.map((period) => period.temperature);
        this.extraData = [...forecastTempeartureData.properties.periods];
    }
}