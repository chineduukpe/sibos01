import {CHANGE_MAIN_CONTENT} from '../actions/action-types'
import { DASHBOARD } from '../components/constants/constants'

export const mainView = (state = DASHBOARD, action) => {
    switch(action.type){
        case CHANGE_MAIN_CONTENT:
            return action.payload
        default:
            return state;
    }
    return state;
}
