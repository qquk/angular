import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list: Array<Todo>;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(id) {
      this.deleteEvent.emit(id);
  }

  onCompleteItem(id) {
    this.completeEvent.emit(id);
  }

}
