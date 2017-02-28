import { Component, OnInit }      from '@angular/core';

import { Employee }               from './model/employee';
import { EmployeeSearchService }  from './service/employee-search.service';

@Component({
  moduleId: module.id,
  selector: 'employee-search',
  templateUrl: '../../views/employee-search.component.html',
  styleUrls: [ '../../css/employee-search.component.css' ],
  providers: [EmployeeSearchService]
})
export class EmployeeSearchComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeSearchService: EmployeeSearchService) {
  }
  
  getEmployees(): void {
    this.employeeSearchService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}