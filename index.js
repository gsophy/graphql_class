import express from 'express';
import schema from './schema';
import { graphqlHTTP }  from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send ('GraphQL is amazing');
});

const root = { hello: () => "Hi I'm Whorrey"};

app.use ('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log("The server is running on port localhost:8080/graphql"));
