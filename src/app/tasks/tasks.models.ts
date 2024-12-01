export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

export interface CreateTask {
  title: string;
  summary: string;
  dueDate: string;
}
