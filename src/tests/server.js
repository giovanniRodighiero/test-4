import { rest } from 'msw';
import { setupServer } from 'msw/node'

import { bookList } from './fixtures';

/**
 * Setup mock API server
 * NOTA: non dovrebbe essere necessario modificare questo file
 */
const API_URL = 'https://my-json-server.typicode.com/MaieuticalLabs/booklists/books';
const server = setupServer(
  rest.get(API_URL, (_req, res, ctx) => {
    return res(ctx.json(bookList));
  })
);

export default server;