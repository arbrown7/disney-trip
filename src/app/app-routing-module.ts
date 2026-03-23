import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { Trips } from './trips/trips';
import { TripStart } from './trips/trip-start/trip-start';
import { TripEdit } from './trips/trip-edit/trip-edit';
import { TripDetail } from './trips/trip-detail/trip-detail';
import { TripsResolverService } from './trips/trips-resolver.service';

import { Logs } from './logs/logs';
import { LogStart } from './logs/log-start/log-start';
import { LogEdit } from './logs/log-edit/log-edit';
import { LogDetail } from './logs/log-detail/log-detail';
import { LogsResolverService } from './logs/logs-resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/trips', pathMatch: 'full'},
    { path: 'trips', component: Trips, children: [
        { path: '', component: TripStart },
        { path: 'new', component: TripEdit},
        { path: ':id', component: TripDetail, resolve: [TripsResolverService] },
        { path: ':id/edit', component: TripEdit, resolve: [TripsResolverService]}
      ] 
    },
    { path: 'logs', component: Logs, children: [
        { path: '', component: LogStart },
        { path: 'new', component: LogEdit},
        { path: ':id', component: LogDetail, resolve: [LogsResolverService] },
        { path: ':id/edit', component: LogEdit, resolve: [LogsResolverService]}
      ] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
