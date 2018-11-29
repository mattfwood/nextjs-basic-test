import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({
    uri: 'https://task-management-backend.herokuapp.com',
    fetchOPtions: {
      mode: 'no-cors',
    },
    request: operation => {
      operation.setContext({
        headers,
      });
    },
  })
));
