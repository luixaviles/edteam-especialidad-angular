import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  inProgress = new Subject<boolean>(); // RXJS

  constructor() { }

  show() {
    this.inProgress.next(true);
  }

  hide() {
    this.inProgress.next(false);
  }
}
