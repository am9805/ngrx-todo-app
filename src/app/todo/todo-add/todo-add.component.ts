import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {


  txtINput: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtINput = new FormControl('', Validators.required);

  }

  agregarTodo(){
    if(!this.txtINput.valid){
      return;
    }

    const accion = new fromTodo.AgregarTodoAction( this.txtINput.value);
    this.store.dispatch(accion);
    this.txtINput.setValue('');
    
    
  }

}
