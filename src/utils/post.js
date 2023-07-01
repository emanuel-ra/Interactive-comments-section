export const nexId = ({data})=>{   
    let maxId = 0;
    data.map(comment => {
        maxId = (maxId < comment.id) ? comment.id:maxId
        comment.replies?.map(reply => {
            maxId = (maxId < reply.id) ? reply.id:maxId
        });        
    })
    return parseInt(maxId+1)
}
export const timeAgo = (timestamp) => {

    const diff  = Math.abs(new Date()-new Date(timestamp) );

    let seconds = Math.floor((diff/1000))
    let minutes = Math.floor(seconds/60)
    let hours  = Math.floor(minutes/60)
    let days =  Math.floor(hours/24)
    let weeks =  Math.floor(days/7)
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
export const stringToTimestamps = (timeString) => {

    const number = timeString.split(' ')[0]
    const type = timeString.split(' ')[1]
    let currentDate = new Date();

    if(type === "years"){
        currentDate.setFullYear(currentDate.getFullYear() - number)
    }
    if(type == "months"){
        currentDate.setMonth(currentDate.getDate() - number)
    }

    if(type == "days"){      
        currentDate = new Date(new Date().setDate(new Date().getDate() - 5));    
    }
    
    return Date.parse(currentDate)/1000
}