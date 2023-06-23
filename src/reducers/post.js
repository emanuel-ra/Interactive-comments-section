import { data } from "../mooks/data"
export const postInitialState = JSON.parse(window.localStorage.getItem('post')) || data


export const POST_ACTION_TYPES = {
    CREATE_POST:'CREATE_POST' ,
    REMOVE_POST:'REMOVE_POST' ,
    EDIT_POST: 'EDIT_POST'
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('post', JSON.stringify(state));
}

const UPDATE_STATE_BY_ACTION = {
    [POST_ACTION_TYPES.CREATE_POST] : (state,action) => {
        
    },
    [POST_ACTION_TYPES.REMOVE_POST] : (state,action) => {
        
    },
    [POST_ACTION_TYPES.EDIT_POST] : (state,action) => {
        
    }
}

export const postReducer = (state,action) => {
    const {type:actionType} = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state,action): state
}