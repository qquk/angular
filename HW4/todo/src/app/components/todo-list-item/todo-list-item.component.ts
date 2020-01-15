import {Component, Input, Output, OnInit, EventEmitter, ViewChild} from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent  implements OnInit {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() startEditEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: ''
  }

  ngOnInit(): void {
    this.initEditing();
  }

  deleteItem(): void {
    this.deleteEvent.emit(this.item.id);
  }

  startEditItem(): void {
    this.startEditEvent.emit(this.item.id);
    this.initEditing();
  }

  onSubmit(): void {
    this.editEvent.emit({id: this.item.id, ...this.todoForm});
  }

  completeItem(): void {
    console.log('complete');
  }

  editButtonCaption() {
    return this.item.isEditing ? 'Cancel' : 'Edit';
  }

  initEditing() {
    this.todoForm.title = this.item.title;
  }
}
