import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from "apollo-link";

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({
    uri: 'https://task-management-backend.herokuapp.com',
    fetchOptions: {
      credentials: 'include',
      headers,
      // headers: {
      //   cookie: ctx.req ? ctx.req.headers.cookie : headers.cookie,
      // }
    },
    headers,
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
