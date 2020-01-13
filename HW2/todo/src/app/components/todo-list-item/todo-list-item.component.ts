import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../interfaces/Todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();

  public buttonCaption: string;

  ngOnInit(): void {
    this.changeButtonCaption();
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

}
