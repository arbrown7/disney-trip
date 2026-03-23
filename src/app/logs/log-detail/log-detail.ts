import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Log } from '../log.model';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-detail',
  standalone: false,
  templateUrl: './log-detail.html',
  styleUrl: './log-detail.css',
})
export class LogDetail implements OnInit{
  @Input() log: Log;
  id: number;

  constructor(private logService: LogService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.log = this.logService.getLog(this.id);
      }
    )
  }

  // onAddToShoppingList() {
  //   this.logService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditLog() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteLog() {
    this.logService.deleteLog(this.id);
    this.router.navigate(['/logs']);
  }
}
