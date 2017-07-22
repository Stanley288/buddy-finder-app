import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'react-router'
import { propType } from 'graphql-anywhere'

class EventPageGuestList extends React.Component {

  static fragments = {
    event: gql`
      fragment EventPageGuestList on Event {
        numGuests
        guestList{
          id
          name
        }
      }
    `
  }

  static propTypes = {
    event: propType(EventPageGuestList.fragments.event).isRequired,
  }

  render () {
    return (
      <div>
        There are: {this.props.event.numGuests} guests attending.
      </div>
      <ul>
        {this.props.event.guestList.map((guest) =>
          <li key={guest.id}> {guest.name}</li>
        )}
      </ul>
    )
}

export default EventPageGuestList
