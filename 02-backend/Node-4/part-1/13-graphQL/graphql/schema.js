// this file will tell that what will be the structure of our data

import {gql} from 'graphql-tag';

// string
// int
// float
// boolean
// id -> an unique identifier

const typeDefs = gql
type Product {
    id: ID!
    title: String!
    price: Float!
    inStock: Boolean!
};


