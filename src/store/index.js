import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS',
        'NodeJS'
    ],
}

/*
    REDUCER (courses):

        courses ( estado_anterior, action )
            baseado no action.type é realizada uma alteração no estado.

*/

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':

            /*
                Retornamos o objeto com todos os estados (...state),
                no  data  copiamos  tudo que  ja estiver dentro  de
                ...state.data, adicionando algo que venha por dentro
                dessa action, no caso será action.title.
            */

            return { ...state, data: [...state.data, action.title] }
        default:
            return state;
    }
}

/*
    Store do redux:
        passamos o reducer de courses dentro do store.
*/

const store =  createStore(courses);

export default store;