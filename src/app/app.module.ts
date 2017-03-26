import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ResortListItemComponent} from './resort-list-item/resort-list-item.component';
import {WeatherComponent} from './weather/weather.component';
import {ImagePathModifierPipe} from './pipes/image-path-modifier.pipe';
import {WeatherModifierPipe} from './pipes/weather-modifier.pipe';
import {ResortsFilterPipe} from './pipes/resorts-filter.pipe';
import {StarsRateComponent} from './stars-rate/stars-rate.component';
import {NgforNumberPipe} from './pipes/ngfor-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResortListItemComponent,
    WeatherComponent,
    ImagePathModifierPipe,
    WeatherModifierPipe,
    ResortsFilterPipe,
    StarsRateComponent,
    NgforNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
