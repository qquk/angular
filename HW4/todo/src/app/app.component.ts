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
      isEditing: false
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
      isEditing: false
    }
  ];

  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  onFormSubmit(todo): void {
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    }

    this.todoList.push(newTodo);
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
