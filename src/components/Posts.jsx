import { useState } from 'react'
import { iconPlus, iconMinus, iconReply } from '../assets/images'
import ReplyPost from './ReplyPost'

export function Post({ data }){

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
                            <small className='font-semibold text-grayish-blue'>{data.createdAt}</small>
                        </span>
                        <span className='p-2'>
                            <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleReply}>
                                <img src={iconReply} alt="Reply" /> Reply
                            </button>
                        </span>
                    </div>
                    <blockquote className='content'>{data.content}</blockquote>
                </div>
            </article>

            {reply && <ReplyPost />}
        </>
      )
}

export default function Posts({ data }) {
  return (
    <>
       <section className='flex flex-col items-end gap-2'>
            <Post data={data}/>
            <div className='replies-container'>
                {data.replies.map( reply => (
                    <Post data={reply} />
                ))}
            </div>
       </section>
    </>
  )
}
