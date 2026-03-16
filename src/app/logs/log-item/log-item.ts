import { Component, Input } from '@angular/core';
import { Log } from '../log.model';

@Component({
  selector: 'app-log-item',
  standalone: false,
  templateUrl: './log-item.html',
  styleUrl: './log-item.css',
})
export class LogItem {
  @Input() log: Log;
  @Input() index: number;
}
