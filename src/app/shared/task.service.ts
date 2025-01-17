import { Injectable } from "@angular/core";
import { Task, TaskAdapter } from './Task.model';
import { ITask } from './interfaces';
import { Observable, throwError, Subject } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class TaskService {

    private baseUrl = "https://localhost:44364/api/tasks/allTasks";
    taskList = [];

    // declare a Subject to call TaskListComponent's ngOnInit when submitted
    private submitMethodCallSource = new Subject<any>();
    componentMethodCalled$ = this.submitMethodCallSource.asObservable();

    constructor(private httpClient: HttpClient, private adapter: TaskAdapter) { }

    // TODO: make it Observable<Task> or Observable<ITask> instead
    getTasks() {
        const url = `${this.baseUrl}/`;

        // console.log('after assigning: ', this.taskList);

        // return this.httpClient.get(url).pipe(
        //   // adapt items to Task model using adapter
        //   map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
        // )
        return this.httpClient.get(url);
    }

    // tester
    handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    } 

    addNewTask(taskData) {

      // TODO: get logged on user's email. For right now, it will be hardcoded
      let url = "https://localhost:44364/api/tasks/addTask";
      // append hardcoded email
      taskData["email"] = "abc@itlize.com";
      console.log('data to be sent: ', taskData);

      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      let options = {
        headers: headers,
        // body: JSON.stringify(taskData)
      }

      return this.httpClient.post(url, JSON.stringify(taskData), options).pipe(
        catchError(this.handleErrorObservable)
      ).subscribe(r => {
        console.log('response: ', r);

        // call TaskListComponent ngOnInit
        this.submitMethodCallSource.next();
      });
    }

    deleteTask(taskId) {
      let url = "https://localhost:44364/api/tasks/removeTask";
      let taskObject = {
        "taskId": taskId
      }

      console.log('called deleteTask from service, task ID: ', taskObject);

      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      let options = { 
        headers: headers
      }

      return this.httpClient.post(url, JSON.stringify(taskObject), options).pipe(
        catchError(this.handleErrorObservable)
      ).subscribe(r => {
        console.log('response: ', r);
      });
    }
}