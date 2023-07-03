import Post from "./Post"
import PropTypes from 'prop-types';

export default function Posts({ data, currentUser }) {
  
  //const username  = data.currentUser.username    
  return (
    <>
      <section className='flex flex-col items-end gap-2'>
          <Post key={data.id} data={data} currentUser={currentUser} mainPostId={data.id} />
          <div className='replies-container mb-2'>
              {data.replies.map( reply => (
                  <Post key={`${reply.id}`} data={reply} currentUser={currentUser} mainPostId={data.id} />
              ))}
          </div>
      </section>
    </>
  )
}


Posts.propTypes = {
  data: PropTypes.object ,
  currentUser: PropTypes.object
}