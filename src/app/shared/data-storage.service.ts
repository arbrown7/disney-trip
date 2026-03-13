import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TripService } from '../trips/trip.service';
import { Trip } from '../trips/trip.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private tripService: TripService) {}

  storeTrips() {
    const trips = this.tripService.getTrips();
    return this.http
      .put(
        'https://disney-trip-16ee1-default-rtdb.firebaseio.com/trips.json', 
        trips
      )
      .subscribe(response => {
        console.log(response);
    });
  }

  fetchTrips() {
    return this.http.get<Trip[]>(
      'https://disney-trip-16ee1-default-rtdb.firebaseio.com/trips.json'
    )
    .pipe(
      map(trips => {
        return trips.map(trip =>{
          return {...trip}; //, ingredients: recipe.ingredients ? recipe.ingredients : []
        });
      }),
      tap(trips => {
        this.tripService.setTrips(trips);
      })
    )
  }
}
