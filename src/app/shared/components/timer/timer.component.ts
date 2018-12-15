import { JokesManagementService } from './../../services/jokes-management.service';
import { TimerManagementService } from './../../services/timer-management.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})



export class TimerComponent implements OnInit {
  @Input() count: number;
  @Output() finalCount = new EventEmitter<boolean>();
  constructor(
    private timerManagement: TimerManagementService,
    private jokesManagement: JokesManagementService

    ) { }
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
      if (t === 5) {
        if(this.jokesManagement.getFavoriteJokes().length < 10) {
          this.finalCount.emit(true);
          this.resetCountdown();
        } else {
          this.finalCount.emit(false);
        }
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
