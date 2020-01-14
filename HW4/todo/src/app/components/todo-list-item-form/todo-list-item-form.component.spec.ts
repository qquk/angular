import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemFormComponent } from './todo-list-item-form.component';

describe('TodoListItemFormComponent', () => {
  let component: TodoListItemFormComponent;
  let fixture: ComponentFixture<TodoListItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
