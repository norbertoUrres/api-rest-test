import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        hello: String
        saludar(name: String!): String
        users: [User]
        checks: [Check]
        check(name: String, country: String): Check
    }

    type Mutation {
        createCheck(input: CheckInput): Check
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input CheckInput {
        name: String!
        country: String!
        dna: [String!]
        result: String
    }

    type Check {
        _id: ID
        name: String!
        country: String!
        dna: [String!]
        result: String
    }

    input UserInput {
        firstName: String!
        lastName: String!
        country: String!
        dna: [String]
        result: String
    }

    type User {
        _id: ID
        firstName: String!
        lastName: String!
        country: String!
        dna: [String]
        result: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});