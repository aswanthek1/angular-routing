import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  // by event emitter
  // CreateTask:EventEmitter<string> = new EventEmitter<string>();

  // by Subject
  CreateTask = new Subject<string>()


  onCreateTask(value:string) {
    this.CreateTask.next(value)
  }

}
