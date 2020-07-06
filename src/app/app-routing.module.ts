import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: TasksComponent,
    children: [
      { path: 'all', component: TaskListComponent },
      // { path: '', component: TasksComponent }
    ]
    // component: TaskListComponent // TODO: this is testing for the table rendering bug
  },
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: '**',
    redirectTo: 'home' // all undefined routes go to home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
