import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: Array<Todo> = [
    {
      id: 1,
      title: 'Learn JavaScript',
      isCompleted: true,
      isEditing: false
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
      isEditing: false
    },
    {
      id: 3,
      title: 'Learn something',
      isCompleted: false,
      isEditing: false
    }
  ];

  visibleItems: Array<Todo> = [];
  title = 'todo';
  filterState: string = 'all';

  ngOnInit() {
    this.refresh();
  }

  deleteTodoItem(id: number): void {
    this.visibleItems = this.visibleItems.filter(item => item.id !== id);
  }

  completeTodoItem(id: number): void {
    let item = this.visibleItems.find(item => item.id === id);
    item.isCompleted = !item.isCompleted;
    this.refresh();
  }

  filterItems(arr: Array<Todo>, status: string): Array<Todo> {
    switch (status) {
      case 'active': return arr.filter((item) => !item.isCompleted);
      case 'complete': return arr.filter((item) => item.isCompleted);
      default: return arr;
    }
  }

  onFilterItems(state: string): void {
    this.filterState = state;
    this.refresh();
  }

  public refresh(): void {
    this.visibleItems = this.filterItems(this.todoList, this.filterState);
  }

  onStartEdit(id): void {
    const editedItem = this.todoList.find(el => el.id === id);
    editedItem.isEditing = !editedItem.isEditing;
  }
  saveItem(item): void {
    const editedItem = this.todoList.find(el => el.id === item.id);
    editedItem.title = item.title;
    editedItem.isEditing = false;
  }
}
