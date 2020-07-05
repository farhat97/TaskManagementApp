import { Component, OnInit } from '@angular/core';

import { ITask } from '../shared/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './new-task/add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

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
  
  filterByText: string;

  constructor(private newTaskDialog: MatDialog) { }

  // used to open new task window
  openNewTaskDialog() {
    const dialogRef = this.newTaskDialog.open(AddTaskComponent, {
      height: '600px',
      width: '1000px',
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void { 
  }

  filterElements(value: string) {
    this.filterByText = value;
  }

}
