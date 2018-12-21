import {CHANGE_MAIN_CONTENT} from './action-types'

export const changeMainView = (view) => {
    return {
    type: CHANGE_MAIN_CONTENT,
    payload: view
}}