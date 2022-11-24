import { useEffect, useState } from 'react';
import './styles.css';


function App() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('day');
  const [isOpenPost, setIsOpenPost] = useState(false)

  useEffect(() => fetchPosts(), []);

  useEffect(() => console.log(posts), [posts]);


  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.lenght = 10;
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }

  function handleTheme() {
    setTheme((theme) => (theme === 'night' ? 'day' : 'night'))
  }

  function handleOpenPost() {
    setIsOpenPost(prev => !prev);
  }

  return (
    <div className='main-container' data-theme={theme}>
      <header>
        <h1>BLOG LUNA</h1>
        <button className='btn primary'>New Post</button>
        <button className='btn primary' onClick={() => handleTheme()}>
          {theme === 'night' ? 'Day' : 'Night'} Mode</button>
      </header>
      <main>
        {posts.map((post) => (
          <section
            className="post-card"
            id={post.id}
            onClick={() => handleOpenPost()}>
            <div className='post-preview-content'>
              <div className='post-author'>
                <img
                  src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
                  alt='Authors avatar'
                  className='author-avatar'
                />
                <p>NatyKay</p>
              </div>
              <div className='post-body'>
                <p className='post-title'>{post.title}</p>
                <p className='post-preview'>{post.body}</p>
              </div>
            </div>
            <div className='post-image'>
              <img
                src={`https://picsum.photos/id/${10 * post.id}/100`}
                alt='imagem do post'
              />
            </div>
          </section>
        ))}
      </main>
      {isOpenPost ? (
        <section className='fullscreen-post'>
          <button 
          onClick={() => handleOpenPost()}
          className='btn secundary post-close'>&times;</button>
          <div className='post-content'>
            <h1>Título</h1>
            <p>Conteúdo do Post</p>
          </div>
        </section>
      ) : null
      }
    </div>
  )
}

export default App;
