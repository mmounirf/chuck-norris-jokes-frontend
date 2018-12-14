import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatListModule

];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
