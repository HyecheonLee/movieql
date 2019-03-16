import {
    GraphQLServer
} from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
    PORT: 4001,
});

server.start(() => console.log("Graphql Server Running"))