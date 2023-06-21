import { iconPlus, iconMinus, iconReply } from '../assets/images'

export function Post({data}){
    return (
        <>
            <article className="post">
                <div className='btn-group'>
                    <button>
                        <img src={iconPlus} alt="Plus One" />
                    </button>
                    <button>{data.score}</button>
                    <button>
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
                            <a href="" className='flex gap-2'>
                                <img src={iconReply} alt="Reply" /> Reply
                            </a>
                        </span>
                    </div>
                    <blockquote className='content'>{data.content}</blockquote>
                </div>
            </article>
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
