import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const port = process.env.PORT || 4000;
const app = express();
connect();

app.get('/', (req, res) => {
  res.json({
    message: "Hello Word!"
  });
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

app.listen(port, () => {
  
});