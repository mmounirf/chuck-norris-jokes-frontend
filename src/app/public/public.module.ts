import { MaterialModule } from './../shared/modules/material/material.module';
import { JokesComponent } from '../shared/components/jokes/jokes.component';
import { JokesResolverService } from './resolvers/jokes-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { TimerComponent } from '../shared/components/timer/timer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    resolve: {
      jokes: JokesResolverService
    }
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [PublicLayoutComponent, JokesComponent, TimerComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
