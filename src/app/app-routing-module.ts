import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Trips } from './trips/trips';
import { TripStart } from './trips/trip-start/trip-start';
import { TripEdit } from './trips/trip-edit/trip-edit';
import { TripDetail } from './trips/trip-detail/trip-detail';
import { TripsResolverService } from './trips/trips-resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/trips', pathMatch: 'full'},
    { path: 'trips', component: Trips, children: [
        { path: '', component: TripStart },
        { path: 'new', component: TripEdit},
        { path: ':id', component: TripDetail, resolve: [TripsResolverService] },
        { path: ':id/edit', component: TripEdit, resolve: [TripsResolverService]}
      ] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
