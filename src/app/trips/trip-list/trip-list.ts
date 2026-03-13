import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trip } from '../trip.model';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  standalone: false,
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css',
})
export class TripList implements OnInit, OnDestroy {
  trips: Trip[];
  subscription: Subscription;

  constructor(private tripService: TripService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.subscription = this.tripService.tripsChanged
    .subscribe(
      (trips: Trip[]) => {
        this.trips = trips;
      }
    );
    this.trips = this.tripService.getTrips();
  }

  onNewTrip() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
