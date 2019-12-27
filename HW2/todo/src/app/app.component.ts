import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [
    {
      id: 1,
      title: 'Learn JavaScript',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Learn something',
      isCompleted: false,
    }
  ];

  visibleItems: Array<Todo> = [];
  title = 'todo';
  filterState: string = 'all';

  ngOnInit() {
    this.refresh();
  }

  deleteTodoItem(id) {
    this.visibleItems = this.visibleItems.filter(item => item.id !== id);
  }

  completeTodoItem(id) {
    let item = this.visibleItems.find(item => item.id === id);
    item.isCompleted = !item.isCompleted;
    this.refresh();
  }

  filterItems(arr, status) {
    switch (status) {
      case 'all': return arr;
      case 'active': return arr.filter((item) => !item.isCompleted);
      case 'complete': return arr.filter((item) => item.isCompleted);
      default: return arr;
    }
  }

  onFilterItems(state) {
    this.filterState = state;
    this.refresh();
  }

  public refresh() {
    this.visibleItems = this.filterItems(this.todoList, this.filterState);
  }
}
