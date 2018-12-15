import { MaterialModule } from './../shared/modules/material/material.module';
import { JokesComponent } from '../shared/components/jokes/jokes.component';
import { JokesResolverService } from './resolvers/jokes-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    resolve: {
      jokes: JokesResolverService
    }
  }
];

@NgModule({
  declarations: [LoginComponent, PublicLayoutComponent, JokesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
    MaterialModule
  ]
})
export class PublicModule { }
