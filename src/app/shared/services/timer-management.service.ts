import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TimerManagementService {
  isCounting = new EventEmitter<boolean>();
  constructor() { }

  startCounting() {
    this.isCounting.emit(true);
  }

  stopCounting() {
    this.isCounting.emit(false);
  }
}
