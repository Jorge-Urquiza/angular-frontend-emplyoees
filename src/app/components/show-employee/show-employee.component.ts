import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  id: number
  employee: Employee;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.employee = new Employee();
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
   this.employeeService.getById(this.id).subscribe(employee => {
      this.employee = employee;
   });
  }

}
