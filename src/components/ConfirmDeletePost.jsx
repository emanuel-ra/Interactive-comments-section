import { usePosts } from "../hooks/usePosts"

function ConfirmDeletePost() {
    
    const { confirmDeletePost, setConfirmDeletePost, deletePost, removePost  }  = usePosts();

    const handleDelete = () => {
        removePost(deletePost)
        setConfirmDeletePost(!confirmDeletePost)
    }   

    return (    
    <div className={`absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center ${confirmDeletePost?'block':'hidden'} `}>
        <article className={`modal mt-64`}>
            <h3>Delete comment</h3>
            <span>Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone</span>
            <div className="actions">
                <button className="btn btn-cancel" onClick={()=>{  setConfirmDeletePost(!confirmDeletePost) }}>No, Cancel</button>
                <button className="btn btn-confirm" onClick={handleDelete}>Yes, Cancel</button>
            </div>
        </article>            
    </div>
    )
}

export default ConfirmDeletePost