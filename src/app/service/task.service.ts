import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TASKS } from 'src/app/components//tasks/mock-tasks';
import {  Taskinterf } from 'src/app/components//tasks/tasks';
import { Observable, of } from 'rxjs'; //nos permite que el servicio getTask sea asincrónico. Del getTask incluimos en "Taskinterf[]" la palabra "observable"


@Injectable({
  providedIn: 'root'
})


export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(

    private http:HttpClient
  ) { }

  getTasks():  Observable <Taskinterf[]> {
   
    return this.http.get<Taskinterf[]>(this.apiUrl)
    
  } 


}
