import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import server from './tests/server';
import App from './App';


// NON TOCCARE IL SEGUENTE BLOCCO DI TEST!
describe('App', () => {

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Renderizza l\'elenco dei libri', async () => {
    render(<App />);

    const titoli = [
      'Eloquent JavaScript, Second Edition',
      'Learning JavaScript Design Patterns',
      'Speaking JavaScript',
      'Programming JavaScript Applications',
      'Understanding ECMAScript 6',
      'You Don\'t Know JS',
      'Git Pocket Guide',
      'Designing Evolvable Web APIs with ASP.NET'
    ];

    for (const titolo of titoli) {
      const elem = await screen.findByText(titolo);
      expect(elem).toBeInTheDocument();
    }
  });

  test('Filtra l\'elenco dei libri per titolo', async () => {
    render(<App />);
    await screen.findByText('Git Pocket Guide');

    const input = await screen.findByLabelText(/filtra per titolo o autore/i);
    userEvent.type(input, 'javascript');

    const titoli = [
      'Eloquent JavaScript, Second Edition',
      'Learning JavaScript Design Patterns',
      'Speaking JavaScript',
      'Programming JavaScript Applications',
    ];

    for (const titolo of titoli) {
      const elem = await screen.findByText(titolo);
      expect(elem).toBeInTheDocument();
    }

    expect(screen.queryByText('Git Pocket Guide')).not.toBeInTheDocument();
  });

  test('Filtra l\'elenco dei libri per autore', async () => {
    render(<App />);
    await screen.findByText('Git Pocket Guide');

    const input = await screen.findByLabelText(/filtra per titolo o autore/i);
    userEvent.type(input, 'Addy Osmani');

    expect(screen.queryByText('Learning JavaScript Design Patterns')).toBeInTheDocument();
    expect(screen.queryByText('Git Pocket Guide')).not.toBeInTheDocument();
  });

  test('Reset filtro con query vuota', async () => {
    render(<App />);
    await screen.findByText('Git Pocket Guide');

    const input = await screen.findByLabelText(/filtra per titolo o autore/i);
    userEvent.type(input, 'Addy Osmani');

    expect(screen.queryByText('Learning JavaScript Design Patterns')).toBeInTheDocument();
    expect(screen.queryByText('Git Pocket Guide')).not.toBeInTheDocument();

    userEvent.type(input, '');
    expect(screen.queryByText('Git Pocket Guide')).not.toBeInTheDocument();
  });

  // TODO Inserisci qui il tuo codice (se necessario)
  // .....
});

