import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/components//tasks/mock-tasks';
import {  Taskinterf } from 'src/app/components//tasks/tasks';
import { Observable, of } from 'rxjs'; //nos permite que el servicio getTask sea asincrónico. Del getTask incluimos en "Taskinterf[]" la palabra "observable"


@Injectable({
  providedIn: 'root'
})


export class TaskService {
  constructor() { }

  getTasks():  Observable<Taskinterf[]> {
   // const task= of(TASKS) ;
    return of (TASKS);
  } //esta funcion nos va a devolver una lista de tareas
}

/*tener en cuenta que en el video se ve el export de esta forma:
export class TasksComponent implements OnInit{
  (...)
}
*/