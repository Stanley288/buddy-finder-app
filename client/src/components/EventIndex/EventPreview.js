import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'react-router'

class EventPreview extends React.Component {

  static propTypes = {
    event: React.PropTypes.object,
  }

  render () {
    return (
      <Link
        to={`/view/event/${this.props.event.id}`}
        style={{ minWidth: 200 }}
      >
        <ul>
          <li>Event Name: {this.props.event.name}</li>
          <li>Time: {this.props.event.dateTime}</li>
          <li>Location: {this.props.event.location.lat}, {this.props.event.location.lng}</li>
          <li>Guests: {this.props.event.numGuests}</li>
        </ul>
      </Link>
    )
  }
}
