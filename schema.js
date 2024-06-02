export const typeDefs = `#graphql
    type Games { 
        id: ID!
        title: String!            
        platform: [String!]!
    }
    type Review { 
        id: ID!
        rating: Int!
        content: String!
    }
    type Author { 
        id: ID!
        name: String!
        verified: Boolean!
    }
`

// ! for required
//int , float ,string ,boolean,ID    : data_types