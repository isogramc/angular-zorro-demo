import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {Employee} from "../redux/models/employee";
import {Observable} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('searchbox', { static: false })
  searchbox?: ElementRef<HTMLElement>;

  employeeName = '';
  stateEmployees: Observable<Array<Employee>> = new Observable<Array<Employee>>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.stateEmployees = this.store.select(state => state.employees.employees);
  }

  findByName(event: any){
    this.employeeName = event.target.value;
  }


}
