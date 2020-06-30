import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    declarations: [ TasksComponent, TaskListComponent ],
    imports: [ ],
    exports: [ TasksComponent, TaskListComponent ],
    providers: [ ]
})

export class TasksModule { }