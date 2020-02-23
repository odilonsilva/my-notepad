import { SET_TEXT } from '../constants/actions-types';
export default {
    setText(text){
        return {type: SET_TEXT, payload: text}
    }
}