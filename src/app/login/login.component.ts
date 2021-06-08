import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import {IEmployee} from "../IEmployee";
import {Employee} from "../models/employee";
import {AddEmployee} from "../actions/employee.action";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stateEmployees: Observable<Array<Employee>> = new Observable<Array<Employee>>();
  employees: Array<IEmployee> = new Array<IEmployee>();

  constructor(private store: Store) {

    this.employees = this.getEmployees();

    this.employees.map((employee) =>{
      this.store.dispatch(new AddEmployee(employee));
    })





  }

  ngOnInit(): void {

    this.stateEmployees = this.store.select(state => state.employees.employees);
    console.log('state employees', this.stateEmployees);
  }

  // service, API,
  getEmployees(): IEmployee[]{
    return [{
      empId: 1,
      empName: 'Edwin Bush',
      empCompany: 'Owens Illinois Inc',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/45.png?1620304026388",
      companyAvatarUrl: "",
      empLocation: "Congo",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]  }, {
      empId: 2,
      empName: 'Justine Malone',
      empCompany: 'Smithfield Foods Inc',
      empRating: 4.5,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/73.png?1620305129082",
      companyAvatarUrl: "<svg version=\"1.2\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"ng-element\" data-id=\"5bbaa75bf0ce49319771e5c6706db14f\" style=\"overflow: visible; width: 20px; height: 20px; opacity: 1; mix-blend-mode: normal; transform: rotate(0deg) translate(680px, 264px) rotate(0deg);\"><defs><path id=\"path-1622975862564953\" d=\"M0 6.000000000000001 C0 2.6862915012000004 2.6862915012000004 0 6.000000000000001 0 C6.000000000000001 0 14 0 14 0 C17.3137084988 0 20 2.6862915012000004 20 6.000000000000001 C20 6.000000000000001 20 14 20 14 C20 17.3137084988 17.3137084988 20 14 20 C14 20 6.000000000000001 20 6.000000000000001 20 C2.6862915012000004 20 0 17.3137084988 0 14 C0 14 0 6.000000000000001 0 6.000000000000001 Z\"></path><pattern id=\"pattern-16229758625701044\" height=\"100%\" patternUnits=\"objectBoundingBox\" width=\"125%\" x=\"-25%\" y=\"0%\"><image xlink:href=\"https://images.unsplash.com/photo-1620231198671-2c2046fd5f63?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzODAxOXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDMwNTEyOQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080\" height=\"720\" transform=\"scale(0.027777777777777776, 0.027777777777777776)\" width=\"1080\"></image></pattern></defs><g transform=\"translate(0, 0)\"><path d=\"M0 6.000000000000001 C0 2.6862915012000004 2.6862915012000004 0 6.000000000000001 0 C6.000000000000001 0 14 0 14 0 C17.3137084988 0 20 2.6862915012000004 20 6.000000000000001 C20 6.000000000000001 20 14 20 14 C20 17.3137084988 17.3137084988 20 14 20 C14 20 6.000000000000001 20 6.000000000000001 20 C2.6862915012000004 20 0 17.3137084988 0 14 C0 14 0 6.000000000000001 0 6.000000000000001 Z\" style=\"stroke: rgb(140, 140, 140); stroke-width: 0; stroke-linecap: butt; stroke-linejoin: miter; fill: url(&quot;#pattern-16229758625701044&quot;);\"></path></g></svg>",
      empLocation: "Rwanda",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
        },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]
    }, {
      empId: 3,
      empName: 'Isabel Love',
      empCompany: 'The All State Corporation',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/78.png?1620305129088",
      companyAvatarUrl: "<svg version=\"1.2\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"ng-element\" data-id=\"5bbaa75bf0ce49319771e5c6706db14f\" style=\"overflow: visible; width: 20px; height: 20px; opacity: 1; mix-blend-mode: normal; transform: rotate(0deg) translate(1030px, 264px) rotate(0deg);\"><defs><path id=\"path-1622975862530608\" d=\"M0 6.000000000000001 C0 2.6862915012000004 2.6862915012000004 0 6.000000000000001 0 C6.000000000000001 0 14 0 14 0 C17.3137084988 0 20 2.6862915012000004 20 6.000000000000001 C20 6.000000000000001 20 14 20 14 C20 17.3137084988 17.3137084988 20 14 20 C14 20 6.000000000000001 20 6.000000000000001 20 C2.6862915012000004 20 0 17.3137084988 0 14 C0 14 0 6.000000000000001 0 6.000000000000001 Z\"></path><pattern id=\"pattern-1622975862537699\" height=\"100%\" patternUnits=\"objectBoundingBox\" width=\"119.23076923076923%\" x=\"-19.230769230769223%\" y=\"0%\"><image xlink:href=\"https://images.unsplash.com/photo-1620134912794-e7c696c77dca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzODAxOXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDMwNTEyOQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080\" height=\"780\" transform=\"scale(0.02564102564102564, 0.02564102564102564)\" width=\"1080\"></image></pattern></defs><g transform=\"translate(0, 0)\"><path d=\"M0 6.000000000000001 C0 2.6862915012000004 2.6862915012000004 0 6.000000000000001 0 C6.000000000000001 0 14 0 14 0 C17.3137084988 0 20 2.6862915012000004 20 6.000000000000001 C20 6.000000000000001 20 14 20 14 C20 17.3137084988 17.3137084988 20 14 20 C14 20 6.000000000000001 20 6.000000000000001 20 C2.6862915012000004 20 0 17.3137084988 0 14 C0 14 0 6.000000000000001 0 6.000000000000001 Z\" style=\"stroke: rgb(140, 140, 140); stroke-width: 0; stroke-linecap: butt; stroke-linejoin: miter; fill: url(&quot;#pattern-1622975862537699&quot;);\"></path></g></svg>",
      empLocation: "Comoros",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]  }, {
      empId: 4,
      empName: 'Nancy Burton',
      empCompany: 'ARAMARK Corporation',
      empRating: 4.5,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/6.png?1620305129060",
      companyAvatarUrl: "",
      empLocation: "Lao People's Democratic Republic",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]   }, {
      empId: 5,
      empName: 'Eliza Perkins',
      empCompany: 'Intel Corporation',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/52.png?1620305129083",
      companyAvatarUrl: "",
      empLocation: "Isle of Man",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }] }, {
      empId: 6,
      empName: 'Eddie Carter',
      empCompany: 'Timken Company',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/1.png?1620305129089",
      companyAvatarUrl: "",
      empLocation: "Virgin Islands, British",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]  }, {
      empId: 7,
      empName: 'Nicholas Daniel',
      empCompany: 'Boston Scientific Corporation',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/64.png?1620305129081",
      companyAvatarUrl: "",
      empLocation: "Serbia",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }] }, {
      empId: 8,
      empName: 'Eugene Alvarado',
      empCompany: 'Questar Corp',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/27.png?1620305129084",
      companyAvatarUrl: "",
      empLocation: "Mali",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
      item: "Agile"
    },
      {
        item: "Scrum"
      },
      {
        item: "App Development"
      },
      {
        item: "Big Data"
      },
      {
        item: "Analytics"
      }]
  }, {
      empId: 9,
      empName: 'Devin Moore',
      empCompany: 'Smurfit-Stone Container Corp',
      empRating: 4.6,
      empReviewCount: 15,
      empDeliveries: 5,
      empStartRate: 112,
      empAvatarUrl: "https://uxpin.s3.amazonaws.com/faces/1.png?1620305129089",
      companyAvatarUrl: "",
      empLocation: "Somalia",
      empLanguages: ["English, Russian, French"],
      empSkills: [{
        item: "Agile"
      },
        {
          item: "Scrum"
        },
        {
          item: "App Development"
        },
        {
          item: "Big Data"
        },
        {
          item: "Analytics"
        }]
    }]}

}
