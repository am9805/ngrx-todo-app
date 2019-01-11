import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] Set filtro';

export type filtrosValudos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action{
    readonly type= SET_FILTRO;
    constructor(public filtro: filtrosValudos){};
}

export type acciones = SetFiltroAction;