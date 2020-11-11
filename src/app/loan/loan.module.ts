import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: LoanComponent
  }
];

@NgModule({
  declarations: [ LoanComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class LoanModule { }
