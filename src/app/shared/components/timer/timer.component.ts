import { TimerManagementService } from './../../services/timer-management.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})



export class TimerComponent implements OnInit {
  @Input() count: number;
  constructor(private timerManagement: TimerManagementService ) { }
  timer: number;
  timerSubscription: Subscription;


  ngOnInit() {
    this.startCountdown();
    this.timerManagement.isCounting.subscribe((isCounting) => {
      isCounting ? this.startCountdown() : this.stopCountdown();
    });
  }

  startCountdown() {
    this.timerSubscription = timer(0, 1000).subscribe((t) => {
      this.timer = this.count - t;
      if (this.timer < 0) {
        this.resetCountdown();
      }
    });
  }

  resetCountdown() {
    this.timer = this.count;
    this.timerSubscription.unsubscribe();
    this.startCountdown();
  }

  stopCountdown() {
    this.timerSubscription.unsubscribe();
    this.timer = this.count;
  }

}
