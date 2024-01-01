import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task-service.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private taskService:TaskService) {}
  newTask: string = '';

  onCreateTask() {
    console.log(this.newTask)
    this.taskService.onCreateTask(this.newTask)
  }

}
