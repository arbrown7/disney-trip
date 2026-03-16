import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Trips } from './trips/trips';
import { TripDetail } from './trips/trip-detail/trip-detail';
import { TripEdit } from './trips/trip-edit/trip-edit';
import { TripItem } from './trips/trip-item/trip-item';
import { TripList } from './trips/trip-list/trip-list';
import { Header } from './header';
import { AppRoutingModule } from './app-routing-module';
import { TripStart } from './trips/trip-start/trip-start';
import { ReactiveFormsModule } from '@angular/forms';
import { Logs } from './logs/logs';
import { LogEdit } from './logs/log-edit/log-edit';
import { LogDetail } from './logs/log-detail/log-detail';
import { LogItem } from './logs/log-item/log-item';
import { LogList } from './logs/log-list/log-list';
import { LogStart } from './logs/log-start/log-start';

@NgModule({
  declarations: [
    App,
    Trips,
    TripDetail,
    TripEdit,
    TripItem,
    TripList,
    Header,
    TripStart,
    Logs,
    LogEdit,
    LogDetail,
    LogItem,
    LogList,
    LogStart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
