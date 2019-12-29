import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Loading, Header, LaunchTile } from '../components'
import { LAUNCH_TILE_DATA } from './launches'

const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`

export default function Profile() {
  return <div />;
}
