import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LogService } from '../log.service';

@Component({
  selector: 'app-log-edit',
  standalone: false,
  templateUrl: './log-edit.html',
  styleUrl: './log-edit.css',
})
export class LogEdit implements OnInit{
  id: number;
  editMode = false;
  logForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private logService: LogService,
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
      this.logService.updateLog(this.id, this.logForm.value);
    } else {
      this.logService.addLog(this.logForm.value);
    }
  }

  // onAddIngredient() {
  //   (<FormArray>this.logForm.get('ingredients')).push(
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
    let logDate = '';
    let logParks = '';
    let logNotes = '';
    let logWeather = '';
    let logCrowd = 0;
    let logRating = 0;
    //let logTrip = null;
    //let logAttractions = new FormArray([]);
  
    if(this.editMode) {
      const log = this.logService.getLog(this.id);
      logDate = log.date;
      logParks = log.parks;
      logNotes = log.notes;
      logWeather = log.weather;
      logCrowd = log.crowdLevel;
      logRating = log.rating;
      //logTrip = log.tripId;
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
    this.logForm = new FormGroup({
      'date': new FormControl(logDate, Validators.required),
      'parks': new FormControl(logParks, Validators.required),
      'notes': new FormControl(logNotes, Validators.required),
      'weather': new FormControl(logWeather, Validators.required),
      'crowdLevel': new FormControl(logCrowd, Validators.required),
      'rating': new FormControl(logRating, Validators.required)
      //'tripId': new FormControl(logTrip, Validators.required)
      //'attractions': logAttractions
    });
  }

  // get controls() {
  //   return (<FormArray>this.logForm.get('ingredients')).controls;
  // }

}
