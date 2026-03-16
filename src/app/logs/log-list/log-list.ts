import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Log } from '../log.model';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-list',
  standalone: false,
  templateUrl: './log-list.html',
  styleUrl: './log-list.css',
})
export class LogList implements OnInit, OnDestroy {
  logs: Log[];
  subscription: Subscription;

  constructor(private logService: LogService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.subscription = this.logService.logsChanged
    .subscribe(
      (logs: Log[]) => {
        this.logs = logs;
      }
    );
    this.logs = this.logService.getLogs();
  }

  onNewLog() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
