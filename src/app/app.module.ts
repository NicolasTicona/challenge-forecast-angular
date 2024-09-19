import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './components/weather.component';
import { HomeComponent } from './components/home.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
