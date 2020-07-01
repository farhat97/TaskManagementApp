import { Injectable } from "@angular/core";
import { Task, TaskAdapter } from './Task.model';
import { ITask } from './interfaces';
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class TaskService {

    private baseUrl = "https://localhost:44364/api/tasks/allTasks";
    taskList = [];

    constructor(private httpClient: HttpClient, private adapter: TaskAdapter) { }

    // TODO: make it Observable<Task> or Observable<ITask> instead
    getTasks(): Observable<Task> {
        const url = `${this.baseUrl}/`;

        this.httpClient.get(url).forEach(obj => {
          console.log('assigning 1 object to list');
          this.taskList.push(obj);
        });

        console.log('after assigning: ', this.taskList);

        return this.httpClient.get(url).pipe(
          // adapt items to Task model using adapter
          map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
        )
    }
}