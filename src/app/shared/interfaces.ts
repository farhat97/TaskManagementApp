export interface ITask {
    taskId: number;
    taskType: string;
    contactPerson: string;
    dueDate: string; // TODO: change to date type
    userId: number;
    taskName: string;
    taskDescription: string;
}