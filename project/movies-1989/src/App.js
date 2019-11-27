import React from 'react'

function MovieSection() {
  return (
    <section className="movie">
      <h1>Back to the Future II</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis
        obcaecati placeat eum tenetur debitis culpa! Dolor, eaque distinctio
        quae aspernatur dolores reprehenderit soluta voluptatibus ab ea veniam
        adipisci itaque.
      </p>
      <p className="read-more">
        <a href="/details">More...</a>
      </p>
    </section>
  )
}

const App = () => {
  return (
    <div>
      <header>
        <h1>The top movies of 1989!</h1>
        <h2>What a great year for film.</h2>
      </header>
      <main>
        <MovieSection />
        <MovieSection />
        <MovieSection />
      </main>
      <footer>
        Built with &hearts; at Suncoast Developers Guild, in St Petersburg,
        Florida.
      </footer>
    </div>
  )
}

export default App
