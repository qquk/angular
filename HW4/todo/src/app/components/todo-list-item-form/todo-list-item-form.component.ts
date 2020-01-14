import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from '../../interfaces/Todo';

@Component({
  selector: 'app-todo-list-item-form',
  templateUrl: './todo-list-item-form.component.html',
  styleUrls: ['./todo-list-item-form.component.css']
})
export class TodoListItemFormComponent implements OnInit {
  @Input() item: Todo;
  @Output() submitEvent = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: ''
  };

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.todoForm.title = this.item.title;
  }
  onSubmit(): void {
    this.submitEvent.emit({id: this.item.id, ...this.todoForm});
  }
}
