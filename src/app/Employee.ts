import { Skill } from './Skill';

export interface Employee{
    id:number;
    name:string;
    date:string;
    salary:number;
    DOB:Date,
    skill:Skill[];
}