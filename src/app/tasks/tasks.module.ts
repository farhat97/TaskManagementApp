import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AddTaskComponent } from './new-task/add-task/add-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';

@NgModule({
    declarations: [ 
        TasksComponent, 
        TaskListComponent, 
        AddTaskComponent, 
        DeleteTaskDialogComponent 
    ],
    imports: [ 
        MatTableModule,
        CommonModule,
        HttpClientModule, 
        MatSelectModule, 
        MatCheckboxModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [ TasksComponent, TaskListComponent ],
    providers: [ ]
})
export class TasksModule { }