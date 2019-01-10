import * as fromTodo from './todo.actions'
import { Todo } from './model/todo.model';

const todo1 = new Todo('Salvar el mundo');
const todo2= new Todo('Conquistar el mundo');

todo2.completado = true;

const initialState: Todo[] = [todo1, todo2];
export function todoReducer (state = initialState, action: fromTodo.Actions): Todo[]{

    switch (action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        default:
            return state;
    }

}