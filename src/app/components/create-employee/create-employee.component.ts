import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  save() : void {
    this.employeeService.create(this.employee).subscribe(employee => {
      this.router.navigate(['employees'])
    });;


  }
}
