import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
 
  emp:Employee={
    id:3,
    name:"John",
    date:"10/12/2005",
    salary:30000,
    DOB:new Date('12/10/1987'),
    skill:[
      {skill_id:100,skill_name:"java"},
      {skill_id:101,skill_name:"C"}
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
