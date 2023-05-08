import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee[] = [];

  constructor(
    private router: Router,
    private employeeService: EmployeeService
    ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }
  delete(id: number): void {
    if(confirm('Esta seguro que desea eliminar este registro?')){
      this.employeeService.delete(id).subscribe(res => {
        this.load();
      });
    }
  }

  update(id: number){
    this.router.navigate(['edit', id])
  }
  show(id: number){
    this.router.navigate(['show', id])
  }
}
