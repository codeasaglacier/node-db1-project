const express = require( "express" )
const server = require("./api/server.js");
const accountsRouter = require( "./accountsRouter" )


const PORT = process.env.PORT || 4000;

server.use( express.json() )
server.use( "/accounts", accountsRouter )

server.use( ( err, req, res, next ) => {
  console.log( err )
  res.status( 500 ).json( {
    message: "Something went wrong"
  } ) 
} )


server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
