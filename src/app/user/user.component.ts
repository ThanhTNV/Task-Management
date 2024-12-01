import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // get Avatar() {
  //   return `assets/users/${this.avatar}`;
  // }
  @Input({
    required: true,
    transform: (val: string) => {
      return signal(`assets/users/${val}`);
    },
  })
  avatar!: any;
  // @Input({ required: true }) name!: string;
  name = input<string>('Default');
  // @Input({ required: true }) id!: string;
  id = input.required<string>();
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();//Cái nào cũng được, nhưng mà @Output() đươc dùng nhiều hơn

  onSelectUser() {
    this.select.emit(this.id());
  }
}
