import { Injectable } from "@angular/core";
import { CreateTask, Task } from "./tasks.models";
import { dummyTasks } from "../dummy-tasks";
import { User } from "../user/users.models";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask({
    taskData,
    userId
  }:{
    taskData: CreateTask,
    userId: string
  }) {
    this.tasks.push({
      id: Math.random().toString(36).substring(7),
      userId: userId,
      title: taskData.title,
      dueDate: new Date(taskData.dueDate).toISOString().split('T')[0],
      summary: taskData.summary,
    });

    this.saveTasks();
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
