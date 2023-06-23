import { useState } from 'react'
import { iconPlus, iconMinus, iconReply, iconDelete, iconEdit } from '../assets/images'
import ReplyPost from './ReplyPost'
import { timeAgo } from '../utils/post'

export function Post({ data , currentUser, mainPostId }){
    
    const [score,setScore] = useState(data.score)
    const [reply,setReply] = useState(false)

    const handleScorePlus = () =>{
        setScore(score+1)
    }

    const handleScoreMinus = () =>{
        setScore(score-1)
    }

    const handleReply = () =>{
        setReply(!reply);
    }

    return (
        <>
            <article className="post">
                <div className='btn-group'>
                    <button onClick={handleScorePlus}>
                        <img src={iconPlus} alt="Plus One" />
                    </button>
                    <button>{score}</button>
                    <button onClick={handleScoreMinus}>
                        <img src={iconMinus} alt="Minus One" />
                    </button>
                </div>
                <div className='body'>
                    <div className='user'>
                        <span className='block flex items-center gap-2'>
                            <img src={data.user.image.webp} alt="" />                            
                            <span className='font-bold'>{data.user.username}</span>
                            <small className='font-semibold text-grayish-blue'>{(Number.isInteger(data.createdAt)) ? timeAgo(data.createdAt):data.createdAt}</small>
                        </span>
                        <span className='p-2 flex gap-2'>

                            {(currentUser!==data.user.username) &&
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleReply}>
                                    <img src={iconReply} alt="Reply" /> Reply
                                </button>                               
                            }

                            {(currentUser===data.user.username) &&                                
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' >
                                    <img src={iconDelete} alt="Reply" /> Delete
                                </button>                                                                                        
                            }

                            {(currentUser===data.user.username) &&                                
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' >
                                    <img src={iconEdit} alt="Reply" /> Edit
                                </button>                                                                                        
                            }
                            
                        </span>
                    </div>
                    <blockquote className='content'>{data.content}</blockquote>
                </div>
            </article>

            {reply && <ReplyPost post={data} mainPostId={mainPostId} />}
        </>
      )
}

export default function Posts({ data, currentUser }) {
    //const username  = data.currentUser.username  
  return (
    <>
       <section className='flex flex-col items-end gap-2'>
            <Post data={data} currentUser={currentUser} mainPostId={data.id} />
            <div className='replies-container mb-3'>
                {data.replies.map( reply => (
                    <Post key={reply.id} data={reply} currentUser={currentUser} mainPostId={data.id} />
                ))}
            </div>
       </section>
    </>
  )
}
