import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  emp:Employee={
    id:3,
    name:"John",
    date:"10/12/2005",
    salary:30000,
    skill:[
      {skill_id:100,skill_name:"java"},
      {skill_id:101,skill_name:"C"}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
