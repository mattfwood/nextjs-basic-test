import React from 'react'
import Link from 'next/link'

import Head from '../components/head'
import Nav from '../components/nav'
import Countries from '../components/Countries';
import SignIn from '../components/SignIn';
import User from '../components/User';


const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <Countries />
    <SignIn />
    <User>
      {({ data: { me } }) => {
        if (!me) {
          return <div>Not Logged In</div>
        }
        if (me) {
          return <div>{JSON.stringify(me)}</div>
        }
      }}
    </User>
  </div>
)

export default Home
