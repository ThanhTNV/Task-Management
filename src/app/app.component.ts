import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);

  selected = signal(false);

  selectedUserId = signal('');

  get selectedUser() {
    return this.users().find((user: any) => user.id === this.selectedUserId());
  }

  onUserSelected(id: string) {
    if (!this.selected()) {
      this.selected.set(true);
    }
    this.selectedUserId.set(id);
  }
}
