import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
