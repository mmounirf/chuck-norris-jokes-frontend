import { MaterialModule } from './../shared/modules/material.module';
import { JokesResolverService } from './resolvers/jokes-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

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
  declarations: [PublicLayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PublicModule { }
