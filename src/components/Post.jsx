import PropTypes from 'prop-types';
import { useId, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { timeAgo } from "../utils/post";
import BodyPost from "./BodyPost";
import EditPost from "./EditPost";
import PostActions from "./PostActions";
import PostScoreButtons from "./PostScoreButtons";
import ReplyPost from "./ReplyPost";

export default function Post({ data , currentUser, mainPostId }) {
    const [reply,setReply] = useState(false) 
    const [edit,setEdit] = useState(false) 
    const { username } = data.user

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
    
    const isUserLogged = currentUser===username ? true:false

    return (
        <>
            <article className="post">
                <h3 className="sr-only">Post #{data.id} </h3>
                <div className='hidden lg:flex btn-group'>
                    <PostScoreButtons handleScorePlus={handleScorePlus} handleScoreMinus={handleScoreMinus} score={data.score} />
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
                        
                        <div className='hidden lg:p-2 lg:flex lg:gap-2 lg:block'>
                            <PostActions isUserLogged={isUserLogged} handleReply={handleReply} handleDelete={handleDelete} handleEdit={handleEdit} />
                        </div>
                    </div>
                            
                    {!edit && <BodyPost key={bodyPostId} data={data} currentUser={currentUser} mainPostId={mainPostId} />}
                    
                    {edit && <EditPost key={EditPostId} data={data} currentUser={currentUser} mainPostId={mainPostId} edit={edit} setEdit={setEdit} />}

                    <div className="flex justify-between">
                        <div className='btn-group mt-2 flex lg:hidden'>
                            <PostScoreButtons handleScorePlus={handleScorePlus} handleScoreMinus={handleScoreMinus} score={data.score} />                        
                        </div>
                        <div className='p-2 flex gap-2 lg:hidden '>
                            <PostActions isUserLogged={isUserLogged} handleReply={handleReply} handleDelete={handleDelete} handleEdit={handleEdit} />
                        </div>
                    </div>

                </div>

            </article>

            {reply && <ReplyPost key={`replyToPost${data.id}`} post={data} mainPostId={mainPostId} setReply={setReply}  />}
        </>
    )
}

Post.propTypes = {
    data: PropTypes.object.isRequired ,
    currentUser: PropTypes.object.isRequired ,
    mainPostId: PropTypes.number.isRequired ,
}