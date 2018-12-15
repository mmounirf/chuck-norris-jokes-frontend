import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})



export class TimerComponent implements OnInit {
  constructor() { }
  timer: number;
  private timerSubscription: Subscription;

  ngOnInit() {
    this.startCountdown(5);
  }

  startCountdown(count: number) {
    this.timerSubscription = timer(0, 1000).subscribe((t) => {
      this.timer = count - t;
      if (this.timer < 0) {
        this.resetCountdown(count);
      }
    });
  }

  resetCountdown(count) {
    this.timer = count;
    this.timerSubscription.unsubscribe();
    this.startCountdown(count);
  }

}
