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
        <article className='form-post justify-between'>
            <div className="order-2 lg:order-1 w-1/3 lg:w-24">
                <img src={data.currentUser.image.webp} alt={data.currentUser.username} className='' />
            </div>
            <textarea className="order-1 w-full" name="" id="textComment" rows="3" placeholder='Add a comment...'></textarea>
            <div className="w-1/3 lg:w-24 flex items-start justify-end g:w-24 order-3">
                <button className='btn btn-send' onClick={handlePost}>SEND</button>
            </div>
        </article>
    </>
  )
}
