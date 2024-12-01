import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTask } from '../tasks.models';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  constructor(private readonly tasksService: TasksService) {}

  onClose() {
    this.close.emit();
  }

  onSubmitForm() {
    if (this.enteredTitle === '' || this.enteredSummary === '' || this.enteredDueDate === '') {
      return;
    }
    const taskData: CreateTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.tasksService.addTask({taskData, userId: this.userId});
    this.close.emit();
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }
}
