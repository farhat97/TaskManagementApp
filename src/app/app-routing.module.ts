import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: TaskListComponent },
    ]
  },
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '' // all undefined routes go to home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
