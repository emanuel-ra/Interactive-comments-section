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

    const diff  = Math.abs(new Date()-new Date(timestamp) );

    let seconds = Math.floor((diff/1000))
    let minutes = Math.floor(seconds/60)
    let hours  = Math.floor(minutes/60)
    let days =  Math.floor(hours/24)
    let weeks =  Math.floor(hours/7)
    let months =  Math.floor(days/30)
    let years = Math.floor(months/365)
    
    let label = `${seconds} seconds ago`     
    if(minutes) label = `${minutes} minutes ago`     
    if(hours) label = `${hours} hours ago`     
    if(days) label = `${days} days ago`     
    if(weeks) label = `${weeks} weeks ago`
    if(months) label = `${months} months ago`
    if(years) label = `${years} years ago`    
    return label;
}