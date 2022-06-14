import { Component, OnInit } from '@angular/core';
import { TASKS } from './mock-tasks';
import {  Taskinterf } from './tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   
  
  task:Taskinterf[]= TASKS;

  constructor() { }

  ngOnInit(): void {
  }
  

}
export interface Task{
  id: number ; //cuando creamos podria no venir, es opcional 
  text: string;
  day: string;
  reminder: boolean;
}