import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import { data } from './mooks/data'

function App() {

  return (
    <>
      <main>
        <section className='container'>
          {data.comments.map(element => (
            <Posts key={element.id} data={element} currentUser={data.currentUser.username} />          
          ))}
          <CreatePost />
        </section>
      </main>
    </>
  )
}

export default App
