const express = require('express');
const helmet = require('helmet');
const zooRoute = require('./zoos/zoos-router');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.use( '/api/zoos', zooRoute);

const port = 3300;

//sanity check 
server.get("/", (req, res)=>{
  console.log("sane in the membrane")
  res.send(`
  <div style="background-image: url('https://i.ytimg.com/vi/cwxDIrF494g/maxresdefault.jpg'); background-size: cover; height: 700px; ">
    <h2 style="color:white;"> Welcome to the Zoo </h2>
  </div>
  `)
});


server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
