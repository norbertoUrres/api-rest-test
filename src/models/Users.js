import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    country: String,
    dna: [{
        type: String
    }],
    result: String
});

export default model("User", userSchema);