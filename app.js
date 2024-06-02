import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// server setup
const server = new ApolloServer({
    // typeDefs 
    
    // resolvers
})


const {url} = await startStandaloneServer(server , {
    listen : {port:4000}
})

console.log('server ready at',4000);