import { createContext, useReducer, useState } from "react";
import { postReducer, postInitialState } from "../reducers/post";


export const PostsContext = createContext()

function usePostReducer(){    
    const [state,dispatch] = useReducer(postReducer, postInitialState)

    const createPost = post => dispatch({
        type: 'CREATE_POST' ,
        payload: post
    })

    const replyPost = post => dispatch({
        type: 'REPLY_POST' ,
        payload: post
    })

    const updatePost = post => dispatch({
        type: 'UPDATE_POST' ,
        payload: post
    })

    const removePost = post => dispatch({
        type: 'REMOVE_POST' ,
        payload: post
    })
   
    const plusScore = post => dispatch({
        type: 'PLUS_SCORE' ,
        payload: post
    })

    const minusScore = post => dispatch({
        type: 'MINUS_SCORE' ,
        payload: post
    })

    
    return {state,createPost,replyPost,plusScore,minusScore,updatePost,removePost}
}

function useModalConfirm(){
    const [confirmDeletePost, setConfirmDeletePost] = useState(false)
    const [deletePost, setDeletePost] = useState()
    
    return { confirmDeletePost, setConfirmDeletePost,deletePost, setDeletePost }
}


export function PostsProvider({ children }){

    const { state, createPost, replyPost, plusScore, minusScore, updatePost, removePost } = usePostReducer()    
    const { confirmDeletePost, setConfirmDeletePost,deletePost, setDeletePost } = useModalConfirm();
  

    return (
        <PostsContext.Provider value={{
            posts: state ,
            createPost ,
            replyPost ,
            plusScore ,
            minusScore ,
            updatePost ,
            removePost ,
            confirmDeletePost , 
            setConfirmDeletePost ,
            deletePost, 
            setDeletePost ,
        }}>
            {children}
        </PostsContext.Provider>
    )
}

