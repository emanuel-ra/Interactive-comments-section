import { usePosts } from "../hooks/usePosts";
import { data } from "../mooks/data";
import PropTypes from 'prop-types'; // ES6

function ReplyPost({ post, mainPostId, setReply }) {
  
  const {replyPost} = usePosts()
  
  const handleReply = () => {    
    let comment = document.getElementById(`replyTo${post.id}`).value;
    
    let commentWithoutUserName;
    if(comment.includes(`@${post.user.username}`)){
      commentWithoutUserName = comment.replace(`@${post.user.username}`, '').trim();
    }

    if(commentWithoutUserName===''){
      document.getElementById(`replyTo${post.id}`).focus()
      return;
    }   
    const newPost = {
      ...data.currentUser ,
      comment ,
      replyingTo: post.user.username ,     
      mainPostId:mainPostId
    }
    
    replyPost(newPost)
    
    setReply(false);
  }

  return (
    <>
      <form action="" className='form-post'>
          <div>
            <img src={data.currentUser.image.webp} alt={data.currentUser.username} className='' />
          </div>
          <textarea id={`replyTo${post.id}`} rows="3" defaultValue={`@${post.user.username} `}></textarea>
          <div>
              <button type="button" className='btn btn-send' onClick={()=>{handleReply()}}>Reply</button>
          </div>
      </form>
    </>
  )
}

ReplyPost.propTypes  = {
  post: PropTypes.object.isRequired ,
  mainPostId: PropTypes.number ,
  setReply: PropTypes.func
}

export default ReplyPost