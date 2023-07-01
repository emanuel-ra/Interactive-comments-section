import { data } from "../mooks/data"
import { nexId } from "../utils/post"
export const postInitialState = JSON.parse(window.localStorage.getItem('post')) || data.comments

export const POST_ACTION_TYPES = {
    CREATE_POST:'CREATE_POST' ,
    REPLY_POST: 'REPLY_POST' ,
    REMOVE_POST:'REMOVE_POST' ,
    UPDATE_POST: 'UPDATE_POST' ,
    PLUS_SCORE: 'PLUS_SCORE' ,
    MINUS_SCORE: 'MINUS_SCORE'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('post', JSON.stringify(state));        
}

const UPDATE_STATE_BY_ACTION = {
    [POST_ACTION_TYPES.CREATE_POST] : (state,action) => {

        const id = nexId({data:state})

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
        const id = nexId({data:state})

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
        
        const indexPost = state.findIndex(post => post.id === action.payload.mainPostId);    
        let newState = structuredClone(state)

        if(action.payload.mainPostId != action.payload.id){    
            //const indexReply =  state[indexPost].replies.findIndex(post => post.id === action.payload.id);      
            newState[indexPost].replies = state[indexPost].replies.filter( post => post.id !== action.payload.id)            
            console.log(newState)
        }else{
            newState = state.filter( post => post.id !== action.payload.id)
        }
        
        updateLocalStorage(newState)
        return newState;
    },
    [POST_ACTION_TYPES.UPDATE_POST] : (state,action) => {
       
        const indexPost = state.findIndex(post => post.id === action.payload.mainPostId);        
        const newState = structuredClone(state)
        if(action.payload.mainPostId != action.payload.id){          
            const indexReply =  state[indexPost].replies.findIndex(post => post.id === action.payload.id);      
            newState[indexPost].replies[indexReply].content = action.payload.comment            
        }else{
            newState[indexPost].content = action.payload.comment
        }

        updateLocalStorage(newState)
        return newState;
    },
    [POST_ACTION_TYPES.PLUS_SCORE] : (state,action) => {
        const indexPost = state.findIndex(post => post.id === action.payload.mainPostId);        
        const newState = structuredClone(state)
                
        if(action.payload.mainPostId != action.payload.id){          
            const indexReply =  state[indexPost].replies.findIndex(post => post.id === action.payload.id);      
            newState[indexPost].replies[indexReply].score = newState[indexPost].replies[indexReply].score+1
            
        }else{
            newState[indexPost].score = newState[indexPost].score+1
        }

        updateLocalStorage(newState)
        return newState;
    } ,
    [POST_ACTION_TYPES.MINUS_SCORE] : (state,action) => {
        const indexPost = state.findIndex(post => post.id === action.payload.mainPostId);        
        const newState = structuredClone(state)
                
        if(action.payload.mainPostId != action.payload.id){          
            const indexReply =  state[indexPost].replies.findIndex(post => post.id === action.payload.id);      
            newState[indexPost].replies[indexReply].score = newState[indexPost].replies[indexReply].score-1            
        }else{
            newState[indexPost].score = newState[indexPost].score-1
        }

        updateLocalStorage(newState)
        return newState;
    }
}

export const postReducer = (state,action) => {
    const {type:actionType} = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state,action): state
}