/*
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…
Registrare il router dentro app.js con il prefisso posts/.
Nota:
Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte. Ci servirà per i prossimi step. Per oggi vi può servire in caso vogliate provare i bonus.
Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/

const express = require('express') 
const app = express() 
const port = 3000 
const postsRouter = require('./routers/posts'); //Importo il router appena creato


app.get("/", (req, res) => {
     res.send(`Hello world`);
  });

app.use("/posts", postsRouter) //Tramite la funzione use indichiamo a express che esistono nuove rotte, specificando: Quale deve essere il prefisso ("/posts") e quale router utilizzare


app.listen(port, () => {   
    console.log(`Example app listening on port ${port}`)
  })