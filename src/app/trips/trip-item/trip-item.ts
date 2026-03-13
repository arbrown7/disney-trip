import { Component, Input } from '@angular/core';
import { Trip } from '../trip.model';

@Component({
  selector: 'app-trip-item',
  standalone: false,
  templateUrl: './trip-item.html',
  styleUrl: './trip-item.css',
})
export class TripItem {
  @Input() trip: Trip;
  @Input() index: number;
}
