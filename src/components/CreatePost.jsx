import { data } from "../mooks/data"
import { usePosts } from '../hooks/usePosts'

export default function CreatePost() {

  const {createPost} = usePosts()  

  const handlePost = () => {
    let comment = document.getElementById('textComment').value;

    if(comment===''){
      document.getElementById('textComment').focus()
      return;
    }   

    const newPost = {
      ...data.currentUser ,
      comment
    }

    createPost(newPost)
    document.getElementById('textComment').value = ""
  }

  return (
    <>
        <article className='form-post'>
            <div>
                <img src={data.currentUser.image.webp} alt={data.currentUser.username} className='' />
            </div>
            <textarea name="" id="textComment" rows="3" placeholder='Type your post...'></textarea>
            <div>
                <button className='btn btn-send' onClick={handlePost}>SEND</button>
            </div>
        </article>
    </>
  )
}
