import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { ApolloLink } from "apollo-link";

export default withApollo(({ ctx, headers }) => {
  console.log({ ctx, headers });

  if (ctx.req) {
    console.log(ctx.req.headers);
  }

  return new ApolloClient({
    uri: 'https://task-management-backend.herokuapp.com',
    fetchOptions: {
      credentials: 'include',
      headers,
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
});

// export default withApollo(({ ctx, headers }) => {
//   console.log({ ctx, headers });

// });
