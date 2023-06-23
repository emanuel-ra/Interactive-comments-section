import { data } from "../mooks/data"
import { nexId } from "../utils/post"
export const postInitialState = JSON.parse(window.localStorage.getItem('post')) || data.comments
export const postIdInitialState = JSON.parse(window.localStorage.getItem('id')) || nexId({data:data.comments})


export const POST_ACTION_TYPES = {
    CREATE_POST:'CREATE_POST' ,
    REPLY_POST: 'REPLY_POST' ,
    REMOVE_POST:'REMOVE_POST' ,
    EDIT_POST: 'EDIT_POST'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('post', JSON.stringify(state));    
    window.localStorage.setItem('id', postIdInitialState+1);    
}

const UPDATE_STATE_BY_ACTION = {
    [POST_ACTION_TYPES.CREATE_POST] : (state,action) => {

        const id = postIdInitialState
        const newState = [
            ...state ,
            {
                id:id ,
                content:action.payload.comment ,
                createdAt: Date.now() , 
                score: 0 , 
                user:{
                    image:{
                        png:action.payload.image.png ,
                        webp:action.payload.image.webp
                    },
                    username:action.payload.username
                },
                replies:[]
            }
        ]        
        updateLocalStorage(newState)
        return newState
    },
    [POST_ACTION_TYPES.REPLY_POST] : (state,action) => {
        const id = postIdInitialState
        
        const replyPost = {
            id:id ,
            content:action.payload.comment ,
            createdAt: Date.now() , 
            score: 0 , 
            replyingTo: action.payload.replyingTo ,
            user:{
                image:{
                    png:action.payload.image.png ,
                    webp:action.payload.image.webp
                },
                username:action.payload.username
            }
        }

        const index = state.findIndex(post => post.id === action.payload.mainPostId);        
        const newState = structuredClone(state)
        newState[index].replies.push(replyPost)
        
        updateLocalStorage(newState)
        return newState

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