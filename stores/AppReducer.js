import { SET_TEXT } from '../constants/actions-types';

const initialState = {text:'Estado inicial'}

export default (state = initialState,action) => {
    switch(action.type){
        case SET_TEXT:
            return { ...state, text: action.payload }
        default:
            return state
    }
}