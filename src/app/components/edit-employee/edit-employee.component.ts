import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id : number;
  employee : Employee;
  constructor(
    private router : Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.employee = new Employee();
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.employeeService.getById(this.id).subscribe(employee => {
      this.employee = employee;
   });
  }
  update() : void {
    this.employeeService.update(this.id, this.employee ).subscribe(employee => {
      this.router.navigate(['employees']);
    });
  }
}
