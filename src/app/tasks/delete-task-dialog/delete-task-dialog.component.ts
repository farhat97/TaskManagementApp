import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/Task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css']
})
export class DeleteTaskDialogComponent implements OnInit {

  taskToDelete: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  confirmDelete() {
    console.log('task id to delete: ', this.taskToDelete.taskId);
    this.taskService.deleteTask(this.taskToDelete.taskId);
  }

}
