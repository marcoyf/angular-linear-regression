import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'regression',
    // component: RegressionComponent
    // lazy loading module
    loadChildren: () => import('./regression/regression.module').then(m => m.RegressionModule)
  },
  {
    path: 'loan',
    // component: LoanComponent
    // lazy loading module
    loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
