import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from "./redux/models/employee";

@Pipe({
  name: 'UsersFilterPipe'
})
export class UsersFilterPipe implements PipeTransform {

  transform(data: Array<Employee> | null, empName: string): Array<Employee> {
    console.log('employee filter');
    console.log(data);
    console.log(empName);

    if (empName === '') {

      return data ?? [];

    } else {

      let filteredemployees = data?.filter(p => p.empName.toLowerCase().includes(empName.toLowerCase()));

      return filteredemployees ?? [];

    }
  }
}
