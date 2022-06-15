import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Taskinterf } from './tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {  
  task:Taskinterf[]= [];

  constructor( 
    private taskService: TaskService
    ) { } //con esto inicializamos nuestro servicio

  ngOnInit(): void {

    //como las "promise". investigar async y awayt
    this.taskService.getTasks().subscribe((task)=>this.task=task); //cuando se monta nuestro componente llamamos a nuestro servicio y guardamos la lista de tareas en nuestro task
  }
  

}
export interface Task{
  id?: number ; //cuando creamos podria no venir, es opcional 
  text: string;
  day: string;
  reminder: boolean;
}