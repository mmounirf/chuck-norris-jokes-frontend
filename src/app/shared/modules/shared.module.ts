import { MaterialModule } from './material.module';
import { JokesComponent } from './../components/jokes/jokes.component';
import { NgModule } from '@angular/core';
import { TimerComponent } from '../components/timer/timer.component';
import { CommonModule } from '@angular/common';
const sharedComponents = [
  JokesComponent,
  TimerComponent
];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [sharedComponents],
  exports: [sharedComponents, CommonModule],
})
export class SharedModule { }
