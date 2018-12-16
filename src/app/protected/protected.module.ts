import { MaterialModule } from './../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProtectedLayoutComponent } from './protected-layout/protected-layout.component'
import { SharedModule } from '../shared/modules/shared.module';

const protectedRoutes: Routes = [
  {
    path: '',
    component: ProtectedLayoutComponent
  }
];

@NgModule({
  declarations: [ProtectedLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(protectedRoutes),
    MaterialModule,
    SharedModule
  ]
})
export class ProtectedModule { }
