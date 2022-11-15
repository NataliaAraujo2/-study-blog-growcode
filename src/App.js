import './styles.css';


function App() {
  return (
    <div>
      <header>
        <h1>BLOG LUNA</h1>
        <button>New Post</button>
        <button>Dark Mode</button>
      </header>
      <main>
        <section className="post-card" >
          <div className='post-preview-content'>
            <div className='post-author'>
              <img
                src={require('./imgs/IMG-20220505-WA0081.jpg')}
                alt='Authors avatar'
                className='author-avatar'
              />
              <p>NatyKay</p>
            </div>
            <div className='post-body'>
              <p className='post-title'>
                I miss the stream!
              </p>
              <p className='post-preview'>
                For those of you who know a little about my life, you know that I love being in contact with water!
                Of course bathing is good!
                But nothing compares to bathing in the sea or waterfalls, which I prefer!
                One of my favorite extreme water sports is rafting. The goal of this sport is to avoid natural obstacles by paddling in a boat to the final destination.
                I've seen people in despair when the boat turns. I've seen people not learning to swim with the aggressive currents.
                But for me, water heals! It has tranquilizing and antidepressant properties! It works better than any luoxetine, citalopram, paroxetine, sertraline, fluvoxamine and escitalopram.
                With the pandemic and the necessary social isolation, I tried using the water spout and rainwater, using the company of my 5-year-old niece so as not to seem too crazy, to benefit from the properties of water! But nothing compares to the adrenaline rush that rafting provides or the contact with nature in its wildest state to take away any worry or sadness from the soul!
                Longing for the current stream!
              </p>
            </div>
          </div>
          <div className='post-image'>
            <img
              src={require('./imgs/DSC_0863.JPG')}
              alt='Post'
              className='missing-the-currents-image'
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
