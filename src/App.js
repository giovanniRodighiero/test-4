import React from 'react';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Elenco libri</h1>
        <div className="filter">
          <label htmlFor="filterForm">Filtra per titolo o autore:</label>
          <input type="text" id="filterForm" />
          <button>Annulla</button>
        </div>
      </header>
      <main>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </main>
    </div>
  );
}

export default App;
