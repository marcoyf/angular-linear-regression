import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegressionComponent } from './regression.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: RegressionComponent
  }
];

@NgModule({
  declarations: [ RegressionComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class RegressionModule { }
