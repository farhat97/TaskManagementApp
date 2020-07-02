import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [ TasksComponent, TaskListComponent ],
    imports: [ MatTableModule, HttpClientModule, MatSelectModule, MatCheckboxModule ],
    exports: [ TasksComponent, TaskListComponent ],
    providers: [ ]
})
export class TasksModule { }