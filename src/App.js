import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

const API_URL = 'https://my-json-server.typicode.com/MaieuticalLabs/booklists/books';

const List = ({ loading = true, apiError = '', books = []}) => {
    if (loading)
        return <p>caricamento ...</p>;

    if (apiError)
        return <p>Si è verificato un errore, riprovare più tardi</p>

    if (!books.length)
        return <p>Nessun libro disponibile ...</p>

    return <ul className="books">{books}</ul>
};

function App() {

    const [ loading, setLoading ] = useState(false);
    const [ apiError, setApiError ] = useState('');
    const [ books, setBooks ] = useState([]);
    const [ filter, setFilter ] = useState('');

    useEffect(_ => {
        async function fetchBooks () {
            try {
                setApiError(false);
                setLoading(true);
                const rawResults = await fetch(API_URL);
                const results = await rawResults.json();
                setBooks(results);
            } catch (error) {
                console.error(error);
                setApiError(true);

            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [ ]);

    const filteredBooks = useMemo(_ => {
        if (!filter)
            return books;

        return books.filter(book => book.author.toLowerCase().startsWith(filter) || book.title.toLowerCase().startsWith(filter)); 
    }, [ books, filter])

    const Books = filteredBooks.map(book => (
        <li key={book.isbn} className="books__item">
            <h2 className="books__title">
                {book.title}
                <small>{book.subtitle}</small>
            </h2>
            <div className="books__info">
                <p>{book.author}</p>
                <p>{new Date(book.published).toLocaleDateString()}</p>
            </div>
        </li>
    ));



  return (
    <div className="App">
      <header className="App-header">
        <h1>Elenco libri</h1>
        <div className="filter">
          <label htmlFor="filterForm">Filtra per titolo o autore:</label>
          <input type="text" id="filterForm" value={filter} onChange={event => setFilter(event.target.value)} />
          <button onClick={_ => setFilter('')}>Annulla</button>
        </div>
      </header>
      <main>
        <List
            apiError={apiError}
            books={Books}
            loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
