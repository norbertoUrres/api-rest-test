"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

var typeDefs = "\n    type Query {\n        hello: String\n        saludar(name: String!): String\n        toDoListItems: [ToDoItem]\n        users: [User]\n    }\n\n    type ToDoItem {\n        _id: ID\n        title: String!\n        description: String!\n        sorter: Int\n    }\n\n    input ToDoItemInput {\n        title: String!\n        description: String!\n        sorter: Int\n    }\n\n    type Mutation {\n        createItem(input: ToDoItemInput): ToDoItem\n        createUser(input: UserInput): User\n        deleteUser(_id: ID): User\n        updateUser(_id: ID, input: UserInput): User\n    }\n\n    input UserInput {\n        firstName: String!\n        lastName: String!\n    }\n\n    type User {\n        _id: ID\n        firstName: String!\n        lastName: String!\n    }\n";

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports["default"] = _default;
//# sourceMappingURL=schema.js.map