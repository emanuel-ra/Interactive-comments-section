import { createContext, useReducer,useState } from "react";
import { postReducer, postInitialState } from "../reducers/post";


export const PostsContext = createContext()

function usePostReducer(){
    const [state,dispatch] = useReducer(postReducer, postInitialState)

    const createPost = post => dispatch({
        type: '' ,
        payload: post
    })
}

export function PostsProvider({ children }){

    const { state } = usePostReducer()

}

