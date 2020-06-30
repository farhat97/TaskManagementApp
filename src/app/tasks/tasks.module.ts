import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [ TasksComponent, TaskListComponent ],
    imports: [ MatTableModule ],
    exports: [ TasksComponent, TaskListComponent ],
    providers: [ ]
})

export class TasksModule { }