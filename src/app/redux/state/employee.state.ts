import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Employee } from '../models/employee';
import { AddEmployee } from '../actions/employee.action';
import { Observable } from "rxjs";

export class EmployeeStateModel {
  employees: Employee[] = [];
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: []
  }
})
export class EmployeeState {

  @Selector()
  static getEmployees(state: EmployeeStateModel) {
    return state.employees;
  }

  @Action(AddEmployee)
  add({getState, patchState }: StateContext<EmployeeStateModel>, { payload }: AddEmployee) {
    const state = getState();
    patchState({
      employees: [...state.employees, payload]
    });
  }
}
