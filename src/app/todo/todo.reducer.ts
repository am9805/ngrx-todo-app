import * as fromTodo from './todo.actions'
import { Todo } from './model/todo.model';
import { from } from 'rxjs';

const todo1 = new Todo('Salvar el mundo');
const todo2= new Todo('Conquistar el mundo');

todo2.completado = true;

const initialState: Todo[] = [todo1, todo2];
export function todoReducer (state = initialState, action: fromTodo.Actions): Todo[]{

    switch (action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {                
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                }
                else {
                    return todoEdit;
                }
            });
        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {                
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                }
                else {
                    return todoEdit;
                }
            });
            case fromTodo.BORRAR_TODO:
            /**
             * filter genera un nuevo arreglo pero con una condición 
             * y la nuestra es que regrese todos los todo que sean 
             * diferentes al que queremos borrar :D
             */
                return state.filter(todoEdit => todoEdit.id!==action.id);
            case fromTodo.TOGGLE_ALL_TODO:
                return state.map( todoEdit => {
                    return {
                        ...todoEdit,
                        completado: action.completado
                    };
                });
            
        default:
            return state;
    }

}