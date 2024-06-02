import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schema.js';
import db from './_db.js'


const resolvers = {
    Query: {
        games: () => {
            return db.games;
        },
        authors: () => {
            return db.authors;
        },
        reviews: () => {
            return db.reviews;
        },
        review: (parent, args, context ) => {
            return db.reviews.find((review)=> review.id === args.id);
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express();
app.use(express.json()); 

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
