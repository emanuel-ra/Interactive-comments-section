import { createContext, useReducer,useState } from "react";
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

    return {state,createPost,replyPost}
}

export function PostsProvider({ children }){

    const { state, createPost, replyPost } = usePostReducer()

    return (
        <PostsContext.Provider value={{
            posts: state ,
            createPost ,
            replyPost
        }}>
            {children}
        </PostsContext.Provider>
    )

}

