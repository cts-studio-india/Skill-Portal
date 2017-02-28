import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeSearchComponent }  from './employee-search.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/search-list', pathMatch: 'full' },
  { path: 'search-list',  component: EmployeeSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}