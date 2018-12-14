import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProtectedLayoutComponent } from './protected-layout/protected-layout.component';
import { FavoritesComponent } from './favorites/favorites.component';

const protectedRoutes: Routes = [
  {
    path: '',
    component: ProtectedLayoutComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [ProtectedLayoutComponent, FavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(protectedRoutes)
  ]
})
export class ProtectedModule { }
