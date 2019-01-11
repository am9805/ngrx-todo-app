import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico : ElementRef;
  chkField: FormControl;
  txtINput: FormControl;

  editando: boolean;
  constructor( private store : Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl(this.todo.completado);
    this.txtINput = new FormControl(this.todo.texto, Validators.required);
     
    this.chkField.valueChanges.subscribe(valor => {
      const acction = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(acction);
      
    })
  }

  editar(){
    this.editando=true;
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();

    }, 1)
    
  }

  terminarEdicion(){
    this.editando=false;
    if(this.txtINput.invalid){
      return;
    }
    if(this.txtINput.value === this.todo.texto){
      return;
    }
    const accion = new EditarTodoAction(this.todo.id, this.txtINput.value);
    this.store.dispatch(accion);
  }

  borrarTodo(){
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);

  }

}
