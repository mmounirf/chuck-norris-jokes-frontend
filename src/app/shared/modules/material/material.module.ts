import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, MatRippleModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatRippleModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
