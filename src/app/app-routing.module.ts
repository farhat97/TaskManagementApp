import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {
    path: 'home',
    component: TasksComponent
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
