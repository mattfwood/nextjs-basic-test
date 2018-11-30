import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from "apollo-link";

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    fetchOptions: {
      credentials: 'include',
    },
    headers,
  });
  return forward(operation);
});

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({
    uri: 'https://task-management-backend.herokuapp.com',
    fetchOptions: {
      credentials: 'include',
      headers: {
        cookie: headers ? headers.Cookie : {},
      }
    },
    credentials: 'include',
    // request: operation => {
    //   operation.setContext({
    //     fetchOptions: {
    //       credentials: 'include',
    //     },
    //     headers,
    //   });
    // },
  })
));
