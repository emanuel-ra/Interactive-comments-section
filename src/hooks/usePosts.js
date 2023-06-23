import { useContext } from "react";
import { PostsContext } from "../context/posts";

export const usePosts = () =>{
    const context = useContext(PostsContext)

    if(context===undefined){
        throw new Error("useCart must be used within a PostProvider")
    }

    return context;
}