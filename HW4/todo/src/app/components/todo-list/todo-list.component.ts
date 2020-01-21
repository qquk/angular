import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() list: Array<Todo>
  @Output() deleteEvent = new EventEmitter();
  @Output() startEditItemEvent = new EventEmitter();
  @Output() saveItemEvent = new EventEmitter();

  onDeleteItem(id: number): void {
    this.deleteEvent.emit(id);
  }

  onStartEditItem(id): void {
    this.startEditItemEvent.emit(id);
  }
  onEditItem(item): void {
    this.saveItemEvent.emit(item);
  }
}
