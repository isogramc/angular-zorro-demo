import { Employee } from '../models/employee';

export class AddEmployee {
  static readonly type = '[Employee] Add';

  constructor(public payload: Employee) {}
}
