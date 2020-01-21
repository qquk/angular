import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() list: Array<Todo>;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() completeEvent = new EventEmitter<number>();
  @Output() startEditItemEvent = new EventEmitter<number>();
  @Output() saveItemEvent = new EventEmitter<object>();

  onDeleteItem(id: number): void {
      this.deleteEvent.emit(id);
  }

  onCompleteItem(id: number): void {
    this.completeEvent.emit(id);
  }

  onStartEditItem(id): void {
    this.startEditItemEvent.emit(id);
  }
  onEditItem(item): void {
    this.saveItemEvent.emit(item);
  }
}
