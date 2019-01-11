import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValudos = 'todos';

export function filterReducer(state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtrosValudos{
    switch(action.type){
        case fromFiltro.SET_FILTRO:
            return action.filtro;
        default:
             return state;
    }
}