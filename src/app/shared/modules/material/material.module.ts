import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
