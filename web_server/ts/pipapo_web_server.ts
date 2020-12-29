// pipapo_web_server.ts

// __dirname will be soon deprecated
//import path from 'path';
//const script_dirname = path.dirname(new URL(import.meta.url).pathname);
const script_dirname = __dirname;
console.log('script_dirname: ' + script_dirname);



import fs from 'fs';
import express from 'express';



const app = express();
const PORT = 8080;

// ### checking web server
app.get('/mini_services/checki_pipapo_web_server', (req, res) => res.send('Hello from the pipapo_web_server.ts'));


// ### Middleware to deliver the static content of the pipapo_web_ui
app.use(express.static(script_dirname + '/../../web_ui/dist'));


// ### the loop
app.listen(PORT, () => {
    console.log(`[pipapo_web_server]: Server is running at http://localhost:${PORT}`);
  });

