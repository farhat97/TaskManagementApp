import { Component, OnInit } from '@angular/core';

import { ITask } from '../shared/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './new-task/add-task/add-task.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  
  // listen to queryParams in order to open New Task dialog window
  routeQueryparam$: Subscription;

  constructor(private newTaskDialog: MatDialog, 
    private route: ActivatedRoute,
    private router: Router) { 
    
      this.routeQueryparam$ = route.queryParams.subscribe(params => {
        if(params['newTask'] === 'addNewTask') {
          this.openNewTaskDialog();
        }
      })
  }

  // used to open new task window
  openNewTaskDialog() {
    const dialogRef = this.newTaskDialog.open(AddTaskComponent, {
      height: '600px',
      width: '1000px',
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }

  ngOnInit(): void { 
  }

  filterElements(value: string) {
    this.filterByText = value;
  }

  ngOnDestroy() {
    this.routeQueryparam$.unsubscribe();
  }
}
