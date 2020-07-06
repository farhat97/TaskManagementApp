import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

import { ITask } from 'src/app/shared/interfaces';
import { TaskService } from '../../shared/task.service';
import { Task } from 'src/app/shared/Task.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.css' ]
})

export class TaskListComponent implements OnInit, AfterViewInit {
    
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
  taskListDataSource = new MatTableDataSource([]);
  // used for table sorting
  @ViewChild(MatSort) sort: MatSort;

  // get filterBy text from parent component
  @Input() filterBy: string = null;

  tableColumns = ['taskId', 'taskType', 'contactPerson', 'dueDate', 'userId',
                  'taskName', 'taskDescription', 'Options'];

  ngOnInit(): void {
    this.taskListDataSource.data = this.taskList;
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

      // enable table sort
      this.taskListDataSource.sort = this.sort;

    });

    console.log('after assigning: ', this.taskList);
  }
  
  constructor(private taskService: TaskService, private deleteConfirmation: MatDialog) { }
  
  ngAfterViewInit(): void {
    this.taskListDataSource = new MatTableDataSource(this.taskList);
    this.taskListDataSource.sort = this.sort;
  }

  // apply filtering when there are changes in the component. In this case:
  // TaskListComponent receives filterBy text from parent, which triggers the ngOnChanges()
  ngOnChanges() {
    if(this.taskListDataSource.data.length > 0) {
      this.taskListDataSource.filter = this.filterBy.trim().toLocaleLowerCase();
    }
  }

  deleteTask(row) {
    console.log('selected row: ', row);

    // call confirmation dialog
    const dialogRef = this.deleteConfirmation.open(DeleteTaskDialogComponent, {
      disableClose: true
    });

    // pass row data
    dialogRef.componentInstance.taskToDelete = row;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}