import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent
  }
];

@NgModule({
  declarations: [LoginComponent, PublicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ]
})
export class PublicModule { }
