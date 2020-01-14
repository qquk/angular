import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { EmptyMsgComponent } from './components/empty-msg/empty-msg.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListItemFormComponent } from './components/todo-list-item-form/todo-list-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    EmptyMsgComponent,
    TodoFormComponent,
    TodoListItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
