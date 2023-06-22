
function ReplyPost({ data }) {
  return (
    <>
        <form action="" className='form-post'>
            <div>
                <img src={data.currentUser.image.webp} alt={data.currentUser.username} className='' />
            </div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <div>
                <button className='btn btn-send'>Reply</button>
            </div>
        </form>
    </>
  )
}

export default ReplyPost