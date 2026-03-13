import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Trip } from './trip.model';
import { TripService } from './trip.service';
import { DataStorageService } from '../shared/data-storage.service';


@Injectable({
  providedIn: 'root',
})
export class TripsResolverService implements Resolve<Trip[]>  {
  constructor(private dataStorageService: DataStorageService, private tripService: TripService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const trips = this.tripService.getTrips();

    if(trips.length === 0) {
      return this.dataStorageService.fetchTrips();
    } else {
      return trips;
    }
    
  }
  
}
