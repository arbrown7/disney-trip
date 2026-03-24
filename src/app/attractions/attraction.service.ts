import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Attraction } from '../attractions/attraction.model';

@Injectable({
  providedIn: 'root',
})
export class AttractionService {
  attractions: Attraction[] = [];
  attractionsChanged = new Subject<Attraction[]>();

  constructor(private http: HttpClient) {}

  getAttractions(): void {
      this.http.get<{ message: string, attractions: Attraction[] }>('http://localhost:3000/attractions')
          .subscribe(
              (responseData) => {
                  this.attractions = responseData.attractions;
                  this.attractionsChanged.next(this.attractions.slice());
              },
              (error: any) => {
                  console.log(error);
              }
          );
  }

  getAttractionsByPark(park: string): Attraction[] {
      return this.attractions.filter(a => a.park === park);
  }
}
