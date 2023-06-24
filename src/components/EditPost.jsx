import { useId } from "react"
import { usePosts } from "../hooks/usePosts";

function EditPost({ data, mainPostId, }) {
  const textAreaId = useId();

  const { updatePost } = usePosts()

  const handlePost = () => {   

    let comment = document.getElementById(textAreaId).value;

    if(comment===''){
      document.getElementById(textAreaId).focus()
      return;
    }   

    const newPost = {
      ...data ,
      comment ,
      mainPostId:mainPostId
    }

    updatePost(newPost)
  }

  return (
    <article className='form-post'>        
        <textarea name="" id={textAreaId} rows="3" placeholder='Type your post...' defaultValue={data.content}></textarea>
        <div>
            <button className='btn btn-send' onClick={handlePost}>UPDATE</button>
        </div>
    </article>
  )
}

export default EditPost