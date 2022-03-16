import  express  from 'express';
import {graphqlHTTP} from "express-graphql";
import {buildSchemaSync} from "type-graphql";
import {FamilyItemResolver} from "./resolver/FamilyItemResolver";
import {ChildItemResolver} from "./resolver/ChildItemResolver";
import {context} from "./context";



const schema = buildSchemaSync({
  resolvers: [FamilyItemResolver, ChildItemResolver],
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  context: context
}));

app.listen(8080,() =>{
  console.log("serveur à l'écoute")
})