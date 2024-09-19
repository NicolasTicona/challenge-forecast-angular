export type ForecastTemperaturePeriod = {
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
} 

export type ForecastTemperatureResponse = {
    properties: {
        periods: ForecastTemperaturePeriod[];
    }
}