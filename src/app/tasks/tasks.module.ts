import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AddTaskComponent } from './new-task/add-task/add-task.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [ TasksComponent, TaskListComponent, AddTaskComponent ],
    imports: [ 
        MatTableModule, 
        HttpClientModule, 
        MatSelectModule, 
        MatCheckboxModule,
        MatDialogModule,
        MatButtonModule 
    ],
    exports: [ TasksComponent, TaskListComponent ],
    providers: [ ]
})
export class TasksModule { }