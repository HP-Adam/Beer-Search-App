const express = require('express');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server-express');
global.fetch = require('node-fetch');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        singleBeer(id: String): beerInfo
    }

    type Mutation {
        beer(food: String): [beerInfo]
    }

    type beerInfo {
        name: String
        description: String
        abv: Float
        foodPairing: [String]
        image: String
        id: Int
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        singleBeer: async (parent, args) => {
            let request = await fetch(
                `https://api.punkapi.com/v2/beers/${args.id}`
            );
            let data = await request.json();
            return {
                name: data[0].name,
                description: data[0].description,
                abv: data[0].abv,
                foodPairing: data[0].food_pairing,
                image: data[0].image_url,
                id: data[0].id,
            };
        },
    },
    Mutation: {
        beer: async (parent, args) => {
            let request = await fetch(
                `https://api.punkapi.com/v2/beers?food=${args.food}`
            );
            let data = await request.json();
            return data.map((item, i) => {
                return {
                    name: item.name,
                    description: item.description,
                    abv: item.abv,
                    foodPairing: item.food_pairing,
                    image: item.image_url,
                    id: item.id,
                };
            });
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

//https://api.punkapi.com/v2/beers
