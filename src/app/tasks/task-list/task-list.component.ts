import { Component, OnInit } from '@angular/core';

import { ITask } from 'src/app/shared/interfaces';
import { TaskService } from '../../shared/task.service';

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

  tableColumns = ['Task ID', 'Task Type', 'Contact Person', 'Due Date', 'User ID',
                  'Task Name', 'Task Description', 'Options'];

  ngOnInit(): void {
    
  }

  constructor() { }
}