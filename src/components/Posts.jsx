import Post from "./Post"

export default function Posts({ data, currentUser }) {
  
    //const username  = data.currentUser.username  
  return (
    <>
      <section className='flex flex-col items-end gap-2'>
          <Post data={data} currentUser={currentUser} mainPostId={data.id} />
          <div className='replies-container mb-2'>
              {data.replies.map( reply => (
                  <Post key={`${reply.id}`} data={reply} currentUser={currentUser} mainPostId={data.id} />
              ))}
          </div>
      </section>
    </>
  )
}
