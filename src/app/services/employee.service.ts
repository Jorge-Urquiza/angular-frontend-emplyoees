import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = environment.baseUrl + 'employees';

  constructor( private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }

  getByNameOrLastName(name: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${ this.url }/search/${ name }`);
  }

  getById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${ this.url }/show/${ id }`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.url, employee);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${ this.url }/${ id }`, employee);
  }

  delete(id: number) : Observable<any>  {
    return this.httpClient.delete(`${ this.url }/${ id }`);
  }
}
