import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb+srv://nurres:5PSwvEEl7UyN91ZG@clusternurres.xipgi.mongodb.net/test", {
            useNewUrlParser: true
        });
        console.log("### DB is connected!");
    } catch(e) {
        console.log("### Something goes wrong!");
        console.log(e);
    }
}