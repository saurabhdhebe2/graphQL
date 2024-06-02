# graphQL

# GraphQL Server with Node.js and Express

This project demonstrates how to build a GraphQL server with Node.js and Express.

## Features

- Implements a GraphQL server using Apollo Server.
- Integrates with an Express.js application.
- Defines GraphQL schemas, resolvers, and data models.
- Demonstrates basic CRUD operations with GraphQL.

## Requirements

- Node.js and npm installed on your machine.


# examples

mutation {
  # Create a new Game
  addGame(game: { title: "Super Mario Bros", platform: ["Nintendo"] }) {
    id
    title
    platform
  }

  # Update an existing Game
  updateGame(id: "1", edits: { title: "Updated Title" }) {
    id
    title
    platform
  }

  # Delete a Game
  deleteGame(id: "1") {
    id
    title
    platform
  }
}

query {
  # Query all Games
  games {
    id
    title
    platform
  }

  # Query a specific Game by ID
  game(id: "1") {
    id
    title
    platform
  }

  # Query all Reviews for a Game
  game(id: "1") {
    id
    title
    platform
    reviews {
      id
      rating
      content
    }
  }
}

mutation {
  # Add a Review for a Game
  addReview(review: { gameId: "1", rating: 5, content: "Great game!" }) {
    id
    rating
    content
  }
}


