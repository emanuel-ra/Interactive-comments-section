import { useId, useState } from "react";
import { usePosts } from "../hooks/usePosts"
import { iconDelete, iconEdit, iconMinus, iconPlus, iconReply } from "../assets/images";
import  BodyPost  from "./BodyPost"
import  ReplyPost  from "./ReplyPost"
import EditPost from "./EditPost";
import { timeAgo } from "../utils/post";

export default function Post({ data , currentUser, mainPostId }) {
    const [reply,setReply] = useState(false) 
    const [edit,setEdit] = useState(false) 

    const { plusScore, minusScore, confirmDeletePost, setConfirmDeletePost,setDeletePost } = usePosts();

    const bodyPostId = useId();
    const EditPostId = useId();

    const handleReply = () =>{
        setReply(!reply);
    }

    const handleEdit = () =>{
        setEdit(!edit);
    }
   
    const handleDelete = () => {
        const post = { mainPostId , ...data }
        setConfirmDeletePost(!confirmDeletePost)        
        setDeletePost(post)        
    }

    const handleScorePlus = () =>{
        const post = { mainPostId , ...data }
        plusScore(post)
    }

    const handleScoreMinus = () =>{
        const post = { mainPostId , ...data }
        minusScore(post)
    }

    return (
        <>
            <article className="post">

                <div className='btn-group'>
                    <button onClick={handleScorePlus}>
                        <img src={iconPlus} alt="Plus One" />
                    </button>
                    <button>{data.score}</button>
                    <button type='button' onClick={handleScoreMinus}>
                        <img src={iconMinus} alt="Minus One" />
                    </button>
                </div>

                <div className='body'>
                    <div className='user'>
                        <span className='block flex items-center gap-2'>
                            <img src={data.user.image.webp} alt="" />                            
                            <span className='font-bold'>{data.user.username}</span>
                            {(currentUser===data.user.username) &&
                                <small className='bg-moderate-blue px-2 text-white rounded-sm'>You</small>
                            }
                            <small className='font-semibold text-grayish-blue'>{(Number.isInteger(data.createdAt)) ? timeAgo(data.createdAt):data.createdAt}</small>
                        </span>

                        <span className='p-2 flex gap-2'>
                            {(currentUser!==data.user.username) &&
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleReply}>
                                    <img src={iconReply} alt="Reply" /> Reply
                                </button>                               
                            }

                            {(currentUser===data.user.username) && 
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleDelete} >
                                    <img src={iconDelete} alt="Reply" /> Delete
                                </button>                                                                                        
                            }

                            {(currentUser===data.user.username) &&                                
                                <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleEdit} >
                                    <img src={iconEdit} alt="Reply" /> Edit
                                </button>                                                                                        
                            }                            
                        </span>
                    </div>
                            
                    {!edit && <BodyPost key={bodyPostId} data={data} currentUser={currentUser} mainPostId={mainPostId} />}
                    {edit && <EditPost key={EditPostId} data={data} currentUser={currentUser} mainPostId={mainPostId} edit={edit} setEdit={setEdit} />}
                </div>

            </article>

            {reply && <ReplyPost key={`replyToPost${data.id}`} post={data} mainPostId={mainPostId} setReply={setReply}  />}
        </>
    )
}
