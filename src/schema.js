import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        hello: String
        saludar(name: String!): String
        toDoListItems: [ToDoItem]
        users: [User]
    }

    type ToDoItem {
        _id: ID
        title: String!
        description: String!
        sorter: Int
    }

    input ToDoItemInput {
        title: String!
        description: String!
        sorter: Int
    }

    type Mutation {
        createItem(input: ToDoItemInput): ToDoItem
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input UserInput {
        firstName: String!
        lastName: String!
    }

    type User {
        _id: ID
        firstName: String!
        lastName: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});