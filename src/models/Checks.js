import { Schema, model } from "mongoose";

const checkSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    dna: [{
        type: String,
        require: true
    }],
    result: String
});

export default model("Check", checkSchema);