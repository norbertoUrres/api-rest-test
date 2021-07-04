import { ToDoList } from "./sample";
import User from "./models/Users";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hi! Hello Word."
        },
        saludar(_, { name}) {
            return `Hola ${name}`;
        },
        toDoListItems: () => {
            return ToDoList;
        },
        async users() {
            return await User.find();
        }
    },
    Mutation: {
        createItem(_, { input }) {
            input._id = ToDoList.length;
            ToDoList.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {
                new: true
            });
        }
    }
};