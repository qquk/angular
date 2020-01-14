import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() startEditEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  deleteItem(): void {
    this.deleteEvent.emit(this.item.id);
  }

  startEditItem(): void {
    this.startEditEvent.emit(this.item.id);
  }

  editItem(item): void {
    this.editEvent.emit(item);
  }

  completeItem(): void {
    console.log('complete');
  }
  editButtonCaption() {
    return this.item.isEditing ? 'Cancel' : 'Edit';
  }
}
