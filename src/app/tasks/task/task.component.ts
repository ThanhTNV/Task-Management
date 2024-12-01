import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks.models';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private readonly tasksService: TasksService) {}
  @Input() task!: Task;

  completeTask(task: Task) {
    this.tasksService.completeTask(task.id);
  }
}
