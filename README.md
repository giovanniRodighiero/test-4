# Consegna

La richiesta è quella di mostrare l'elenco libri restituito dall'endpoint:
```GET https://my-json-server.typicode.com/MaieuticalLabs/booklists/books```
e permettere all'utente di filtrarli per titolo (`title`) o per autore (`author`).

Se l'input del filtro (`#filterForm`) è attivo, mostro solo i risultati che soddisfano la condizione `title OR author`; altrimenti mostro tutti i libri disponibili.
Il pulsante "annulla" permette di resettare la ricerca in corso.

Una volta assegnata la prova, il tempo a disposizione per concluderla è di 40 minuti, terminati i quali si farà una discussione del lavoro consegnato della durata di circa 15 minuti.

La consegna consiste nel fare una pull request su questo repository con le modifiche attuate.

E' possibile utilizzare / installare qualsiasi libreria e utilizzare ogni tipo di approccio per implementare le modifiche richieste (classi, hooks ecc).


## Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comandi disponibili

Possono essere usati i seguenti comandi:

### `yarn start`

Esegue l'applicazione in modalità sviluppo.<br />
Apre sul browser l'URL [http://localhost:3000](http://localhost:3000).

La pagina è dotata di autoreload.<br />
Eventuali errori, log o warning potranno essere visualizzati nella console.

### `yarn test`

Esegue i test con la modalità watch
