import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TripService } from '../trips/trip.service';
import { Trip } from '../trips/trip.model';

import { Log } from '../logs/log.model';
import { LogService } from '../logs/log.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient, 
    private tripService: TripService,
    private logService: LogService
  ) {}

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

  storeLogs() {
    const logs = this.logService.getLogs();
    return this.http
      .put(
        'https://disney-trip-16ee1-default-rtdb.firebaseio.com/logs.json', 
        logs
      )
      .subscribe(response => {
        console.log(response);
    });
  }

  fetchLogs() {
    return this.http.get<Log[]>(
      'https://disney-trip-16ee1-default-rtdb.firebaseio.com/logs.json'
    )
    .pipe(
      map(logs => {
        return logs.map(log =>{
          return {...log}; //, ingredients: recipe.ingredients ? recipe.ingredients : []
        });
      }),
      tap(logs => {
        this.logService.setLogs(logs);
      })
    )
  }
}
