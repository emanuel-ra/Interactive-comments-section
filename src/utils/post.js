import { data } from "autoprefixer"

export const nexId = ({data})=>{
    const ids = []
    
    data.map(element=>{
        ids.push(element.id)  
        if(element.hasOwnProperty("replies")){
            element.replies.map( element2 => {
                ids.push(element2.id)
            })
        }
    })      
    return ids.sort( (a,b)  => { return b-a } )[0]+1;
}
export const timeAgo = (timestamp) => {
    const dateFormat = new Date(timestamp);
    return dateFormat.toDateString();
}