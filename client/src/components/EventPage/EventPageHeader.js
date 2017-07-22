import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'react-router'
import { propType } from 'graphql-anywhere'

class EventPageHeader extends React.Component {

  static fragments = {
    event: gql`
      fragment EventPageHeader on Event {
        name
        host {
          name
        }
        dateTime
        location {
          lat
          lng
        }
        desc
      }
    `
  }

  static propTypes = {
    event: propType(EventPageHeader.fragments.event).isRequired,
  }

  render () {
    return (
        <ul>
          <li>Event Name: {this.props.event.name}</li>
          <li>Hosy: {this.props.event.host.name}</li>
          <li>Time: {this.props.event.dateTime}</li>
          <li>Location: {this.props.event.location.lat}, {this.props.event.location.lng}</li>
          <li>Description: {this.props.event.desc}</li>
        </ul>
    )
  }
}

export default EventPageHeader
