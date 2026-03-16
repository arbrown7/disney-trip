import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Log } from './log.model';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logsChanged = new Subject<Log[]>();
  
    private logs: Log[] = [];
  
    constructor(//private attractionService: AttractionService
      ) {}
  
    setLogs(logs: Log[]) {
        this.logs = logs;
        this.logsChanged.next(this.logs.slice());
    }
  
    getLogs() {
        return this.logs.slice();
    }
  
    getLog(index: number) {
        return this.logs[index];
    }
  
    // addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //     this.slService.addIngredients(ingredients);
    // }
  
    addLog(log: Log) {
        this.logs.push(log);
        this.logsChanged.next(this.logs.slice());
    }
  
    updateLog(index:number, newLog: Log) {
        this.logs[index] = newLog;
        this.logsChanged.next(this.logs.slice());
    }
  
    deleteLog(index: number) {
        this.logs.splice(index, 1);
        this.logsChanged.next(this.logs.slice());
    }
}
