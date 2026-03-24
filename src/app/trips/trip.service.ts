import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Trip } from './trip.model';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  tripsChanged = new Subject<Trip[]>();

  private trips: Trip[] = [];

  constructor() {}

  setTrips(trips: Trip[]) {
      this.trips = trips;
      this.tripsChanged.next(this.trips.slice());
  }

  getTrips() {
      return this.trips.slice();
  }

  getTrip(index: number) {
      return this.trips[index];
  }

  addTrip(trip: Trip) {
      this.trips.push(trip);
      this.tripsChanged.next(this.trips.slice());
  }

  updateTrip(index:number, newTrip: Trip) {
      this.trips[index] = newTrip;
      this.tripsChanged.next(this.trips.slice());
  }

  deleteTrip(index: number) {
      this.trips.splice(index, 1);
      this.tripsChanged.next(this.trips.slice());
  }
  
}
