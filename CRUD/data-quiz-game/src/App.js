import React from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Quiz Game</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>Learn about data and Informatica!</p>
      </footer>
    </div>
  );
}

export default App;
