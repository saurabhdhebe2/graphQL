import db from './_db.js'

export const resolvers  = {
    Query: {
        games: () => {
            return db.games;
        },
        game: (parent, args, context ) => {
            return db.games.find((game)=> game.id === args.id);
        },
        authors: () => {
            return db.authors;
        },
        author: (parent, args, context ) => {
            return db.authors.find((author)=> author.id === args.id);
        },
        reviews: () => {
            return db.reviews;
        },
        review: (parent, args, context ) => {
            return db.reviews.find((review)=> review.id === args.id);
        }
    },
    Game: {
        reviews:(parent)=>{
            return db.reviews.filter(r=>r.game_id === parent.id)
        }
    },
    Author: {
        reviews:(parent)=>{
            return db.reviews.filter(r=>r.author_id === parent.id)
        }
    },
    Review: {
        author:(parent)=>{
            return db.authors.find(a=>a.id === parent.author_id)
        },
        game:(parent)=>{
            return db.games.find(g=>g.id === parent.game_id)
        }
    },
    Mutation: {
        addGame: (parent, args, context)=> {
            const newGame = { ...args.game, id: (Math.random()*10000).toFixed(0).toString() };
            db.games.push(newGame);
            return newGame;
        },
        updateGame: (parent, args, context)=> {
            db.games = db.games.map((g)=>{
                if(g.id === args.id){
                    return {...g, ...args.edits}
                }
                return g
            })
            return db.games.find(g=>g.id === args.id)
        },
        deleteGame: (parent, args, context)=> {
            db.games = db.games.filter(g=> g.id !==args.id)
            return db.games
        }
    }
}