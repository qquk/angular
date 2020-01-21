import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { EmptyMessageComponent } from './components/empty-message/empty-message.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    EmptyMessageComponent,
    FilterItemsComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
