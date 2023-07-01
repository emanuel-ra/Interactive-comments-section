import { useId } from 'react'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import { usePosts } from './hooks/usePosts';
import { data } from './mooks/data'
import ConfirmDeletePost from './components/ConfirmDeletePost';
import { stringToTimestamps } from './utils/post';

function App() {

  const { posts } = usePosts()
  const containerId = useId();

  // ORDER DATA MAIN POST BY SCORE , REPLIES BY DATE (TIMESTAMP)
  posts.sort( (a,b) => { return b.score-a.score }).map( post => { 
    post.replies = post.replies.sort( (a,b) => {
      // * THIS FUNCTIONS IS ONLY FOR DEFAULT DATA WITH DATES, IT ISN'T NECESSARY FOR NEW POST  
      if(!Number.isInteger(a.createdAt))
        return stringToTimestamps(a.createdAt)-stringToTimestamps(b.createdAt)

      return  b.createdAt-a.createdAt 
    })
  })

  //const orderedPost = orderReplies.sort( (a,b) => { return b.score-a.score });
  return (
    <>
      <main className='relative'>
        <section className='container' id={containerId}>
          {posts.map(element => (
            <Posts key={element.id} data={element} currentUser={data.currentUser.username} />          
          ))}
          <CreatePost />
        </section>
        <ConfirmDeletePost />
      </main>
    </>
  )
}

export default App
