import { useId } from 'react'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import { usePosts } from './hooks/usePosts';
import { data } from './mooks/data'

function App() {

  const { posts } = usePosts()
  const containerId = useId();
  return (
    <>
      <main>
        <section className='container' id={containerId}>
          {posts.map(element => (
            <Posts key={element.id} data={element} currentUser={data.currentUser.username} />          
          ))}
          <CreatePost />
        </section>
      </main>
    </>
  )
}

export default App
