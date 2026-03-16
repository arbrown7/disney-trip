import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { Log } from './log.model';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class LogsResolverService implements Resolve<Log[]>  {
  constructor(private dataStorageService: DataStorageService, private logService: LogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const logs = this.logService.getLogs();

    if(logs.length === 0) {
      return this.dataStorageService.fetchLogs();
    } else {
      return logs;
    }
    
  }
}
