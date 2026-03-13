import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Trip } from '../trip.model';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-detail',
  standalone: false,
  templateUrl: './trip-detail.html',
  styleUrl: './trip-detail.css',
})
export class TripDetail implements OnInit{
  @Input() trip: Trip;
  id: number;

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.trip = this.tripService.getTrip(this.id);
      }
    )
  }

  // onAddToShoppingList() {
  //   this.tripService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditTrip() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteTrip() {
    this.tripService.deleteTrip(this.id);
    this.router.navigate(['/trips']);
  }
}
