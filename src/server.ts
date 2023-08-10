import { gql, ApolloServer } from 'apollo-server';

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
