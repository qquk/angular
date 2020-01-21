import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from "../../interfaces/Todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() completeEvent = new EventEmitter<number>();
  @Output() startEditEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<object>();
  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: ''
  }

  public buttonCaption: string;

  ngOnInit(): void {
    this.changeButtonCaption();
    this.initEditing();
  }

  deleteItem(): void {
    this.deleteEvent.emit(this.item.id);
  }

  completeItem(): void {
    this.completeEvent.emit(this.item.id);
    this.changeButtonCaption();
  }

  changeButtonCaption(): void {
    this.buttonCaption = this.item.isCompleted ? 'Completed' : 'Complete';
  }

  startEditItem(): void {
    this.startEditEvent.emit(this.item.id);
    this.initEditing();
  }

  onSubmit(): void {
    this.editEvent.emit({id: this.item.id, ...this.todoForm});
  }

  editButtonCaption() {
    return this.item.isEditing ? 'Cancel' : 'Edit';
  }

  initEditing() {
    this.todoForm.title = this.item.title;
  }

}
