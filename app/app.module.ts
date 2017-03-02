import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';
import { DataTableModule }  from 'primeng/primeng';

import { AppComponent }     from './app.component';
import { EmployeeSearchService }    from './service/employee-search.service';
import { EmployeeSearchComponent }  from './employee-search.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule
  ],
  declarations: [
    AppComponent,
    EmployeeSearchComponent
  ],
  providers: [ EmployeeSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }