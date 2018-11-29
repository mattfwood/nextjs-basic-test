import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({
    uri: 'https://task-management-backend.herokuapp.com',
    request: operation => {
      operation.setContext({
        fetchOptions: {
          mode: 'no-cors',
        },
        headers,
      });
    },
  })
));
