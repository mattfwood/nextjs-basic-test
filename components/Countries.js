import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_TEAMS = gql`
  query ALL_TEAMS {
    teams {
      id
      name
    }
  }
`;


const Countries = () => (
  <Query query={ALL_TEAMS}>
    {({ data, loading, error }) => {
      console.log({ data, loading, error });
      if (loading) return <div>Loading...</div>
      return (
        <div>{JSON.stringify(data)}</div>
      )
    }}
  </Query>
)

export default Countries;
