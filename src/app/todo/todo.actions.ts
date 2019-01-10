import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo'

export class AgregarTodoAction implements Action{
    readonly type= AGREGAR_TODO;
    constructor(public texto: string){}
}

export type Actions = AgregarTodoAction;