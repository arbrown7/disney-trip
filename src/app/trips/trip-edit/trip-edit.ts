import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Trip } from '../trip.model';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-edit',
  standalone: false,
  templateUrl: './trip-edit.html',
  styleUrl: './trip-edit.css',
})
export class TripEdit implements OnInit{
  id: number;
  editMode = false;
  tripForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private tripService: TripService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id']!= null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if(this.editMode) {
      this.tripService.updateTrip(this.id, this.tripForm.value);
    } else {
      this.tripService.addTrip(this.tripForm.value);
    }
  }

  // onAddIngredient() {
  //   (<FormArray>this.tripForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [
  //           Validators.required,
  //           Validators.pattern(/^[1-9]+[0-9]*$/)
  //         ])
  //     })
  //   );
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  // }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm() {
    let tripName = '';
    let tripStartDate = '';
    let tripEndDate = '';
    let tripAccommodations = '';
    //let recipeIngredients = new FormArray([]);
  
    if(this.editMode) {
      const trip = this.tripService.getTrip(this.id);
      tripName = trip.name;
      tripStartDate = trip.startDate;
      tripEndDate = trip.endDate;
      tripAccommodations = trip.accommodations;
      // if(recipe['ingredients']) {
      //   for(let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }
    this.tripForm = new FormGroup({
      'name': new FormControl(tripName, Validators.required),
      'startDate': new FormControl(tripStartDate, Validators.required),
      'endDate': new FormControl(tripEndDate, Validators.required),
      'accommodations': new FormControl(tripAccommodations, Validators.required)
      //'ingredients': recipeIngredients
    });
  }

  // get controls() {
  //   return (<FormArray>this.tripForm.get('ingredients')).controls;
  // }

}
