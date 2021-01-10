import React, { useState } from "react";
import "./styles.css";

const genreList = ["javascript", "fiction", "business"];
const books = {
  javascript: {
    "Eloquent JavaScript": 4,
    "You Don't Know JS": 3.5
  },
  fiction: {
    "Shiva Trilogy": 5,
    "Harry Potter and the Sorcerer's Stone": 4.5
  },
  business: {
    "Never Split the Difference": 3.5,
    Loonshots: 5
  }
};

export default function App() {
  const [genre, setGenre] = useState("javascript");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <header>
        <h1>📚 goodbooks</h1>
        <small>Checkout my favorite books. Select a genre to get started</small>
      </header>
      <nav>
        <ul className="genre-container">
          {genreList.map((genre) => {
            return (
              <span className="genre-item" key={genre}>
                <button onClick={() => genreClickHandler(genre)}>
                  {genre}
                </button>
              </span>
            );
          })}
        </ul>
      </nav>
      <main>
        <hr />
        <section className="list-container">
          {Object.keys(books[genre]).map((book) => {
            return (
              <article className="list-item" key={book}>
                <p>{book}</p>
                <p>{books[genre][book]}/5</p>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
