// TODO: for the moment, I am using this as opposed to the ITask interface in order to 
// follow this approach: https://florimond.dev/blog/articles/2018/09/consuming-apis-in-angular-the-model-adapter-pattern/

import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Task {
    taskId: number;
    taskType: string;
    contactPerson: string;
    dueDate: string; // TODO: change to date type
    userId: number;
    taskName: string;
    taskDescription: string;
    constructor() { }
}

@Injectable({
    providedIn: 'root'
})

export class TaskAdapter implements Adapter<Task> {
    
    adapt(item: any): Task {
        let newTask = new Task();
        newTask.taskId = item.taskId;
        newTask.taskType = item.taskType;
        newTask.contactPerson = item.contactPerson;
        newTask.dueDate = item.dueDate;
        newTask.userId = item.userId;
        newTask.taskName = item.taskName;
        newTask.taskDescription = item.taskDescription;
        
        return newTask;
    }

}