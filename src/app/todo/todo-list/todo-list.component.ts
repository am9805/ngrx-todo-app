import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  todos: Todo[] = [];
  ngOnInit() {
    this.store.subscribe(state =>{
      this.todos = state.todos;

    });
  }

}
