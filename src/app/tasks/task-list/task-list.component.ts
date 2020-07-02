import { Component, OnInit } from '@angular/core';

import { ITask } from 'src/app/shared/interfaces';
import { TaskService } from '../../shared/task.service';
import { Task } from 'src/app/shared/Task.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.css' ]
})

export class TaskListComponent implements OnInit {
    
  testData: ITask[] = [
    { taskId: 1, taskType: 'Development', contactPerson: 'Sunil', dueDate: 'today', 
      userId: 1, taskName: 'Develop UI', taskDescription: 'some description' },
    { taskId: 2, taskType: 'Development', contactPerson: 'Asel', dueDate: 'today', 
      userId: 3, taskName: 'Develop backend', taskDescription: 'some description' },
    { taskId: 3, taskType: 'Design', contactPerson: 'Sunil', dueDate: 'today', 
      userId: 1, taskName: 'Develop UI', taskDescription: 'some description' }, 
  ];

  taskList: Task[] = [];
  // used for rendering material ui table
  taskListDataSource;

  tableColumns = ['Task ID', 'Task Type', 'Contact Person', 'Due Date', 'User ID',
                  'Task Name', 'Task Description'];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      
      // assign each retrieved task to the task list
      for(let task in tasks) {
        let currentTask = new Task();
        currentTask.taskId = tasks[task].TaskId;
        currentTask.taskType = tasks[task].TaskType;
        currentTask.contactPerson = tasks[task].ContactPersonName;
        currentTask.dueDate = tasks[task].DueDate;
        currentTask.userId = tasks[task].UserId;
        currentTask.taskName = tasks[task].TaskName;
        currentTask.taskDescription = tasks[task].TaskDescription;

        this.taskList.push(currentTask);
      }

      this.taskListDataSource = new MatTableDataSource(this.taskList);

    });

    console.log('after assigning: ', this.taskList);
  }

  constructor(private taskService: TaskService) { }
}