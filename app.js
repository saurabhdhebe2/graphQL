import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const app = express();
app.use(express.json()); 

// server setup
const server = new ApolloServer({typeDefs, resolvers})

// Start ApolloServer
const startApolloServer = async () => {
    await server.start();

    // Apply Apollo Server middleware to Express
    app.use('/graphql', expressMiddleware(server));

    // Start the Express server
    app.listen(4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    });
};

startApolloServer();
