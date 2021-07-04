import CheckHelper from "./utils/CheckHelper";

import User from "./models/Users";
import Check from "./models/Checks";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hi! Hello Word."
        },
        saludar(_, { name}) {
            return `Hola ${name}`;
        },
        async users() {
            return await User.find();
        },
        async checks() {
            return await Check.find();
        },
        async check(_, args) {
            return await Check.findOne(args);
        }
    },
    Mutation: {
        async createCheck(_, { input }) {
            input.result = CheckHelper.testEval(input.dna);
            const newCheck = new Check(input);
            await newCheck.save();
            return newCheck;
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