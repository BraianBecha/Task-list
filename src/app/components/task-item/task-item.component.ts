import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from '../tasks/mock-tasks';
import {Taskinterf} from '../tasks/tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  faTimes = faTimes;
  @Input() tarea: Taskinterf = TASKS[0];
  
  
    constructor() { }

  ngOnInit(): void {
  }

}
