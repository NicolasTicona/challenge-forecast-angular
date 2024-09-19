import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';
import { ForecastTemperaturePeriod } from '../entities/forecast-api.type';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnInit{
    @Input() xAxis: string[] = [];
    @Input() yAxis: number[] = [];
    @Input() title: string = '';
    @Input() extraData: ForecastTemperaturePeriod[] = [];

    public lineChartOptions: ChartOptions<'line'> = {
        responsive: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<"line">) => {
                        const data = this.extraData[tooltipItem.dataIndex];

                        return `Temperature: ${data.temperature} ${data.temperatureUnit} ${data.shortForecast}`;
                    }
                }
            }
        }
    };
    public lineChartLegend = true;
    public lineChartData: undefined | ChartConfiguration<'line'>['data'];

    ngOnInit(): void {
        this.lineChartData = {
            labels: this.xAxis,
            datasets: [
                {
                    data: this.yAxis,
                    label: this.title,
                    fill: false,
                    tension: 0.2,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgb(75, 192, 192)',
                }
            ],
        }
    }
}