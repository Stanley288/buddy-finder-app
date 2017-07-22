import React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import gql from 'graphql-tag'

import CreateEventFormPreview from './CreateEventFormPreview'
import EventPreview from './EventPreview'

class EventsIndex extends React.Component {

// Fragments not used and not neccessary, data makes sense enough without the need to filter()
  static fragments = {
    userEventList: gql`
      fragment UserEventsList on User {
        id
        name
        email
        userEvents {
          id
          name
          dateTime
          location{
            lat
            lng
          }
          numGuests
        }
      }
    `
  }

  static propTypes = {
    data: React.PropTypes.shape({
      User: React.PropTypes.object,
    }).isRequired,
    router: React.PropTypes.object.isRequired,
  }

  render () {
    return (
      <div className='w-100 bg-light-gray min-vh-100'>
          Hey, there are {this.props.data.User.userEvents.length} events in your index
      </div>
      <div>
        <CreateEventFormPreview hostID={this.props.data.User.id} />
        {this.props.data.User.userEvents.map((event) =>
          <EventPreview key={event.id} event={event} />
        )}
      </div>
    )
  }
}

const UserEventListQuery = gql`query UserEventListQuery($email: String!) {
    User(email: $email) {
      id
      name
      email
      userEvents {
        id
        name
        dateTime
        location{
          lat
          lng
        }
        numGuests
      }
    }
  }
  ${EventsIndex.fragments.userEventList}
`

const EventIndexWithData = graphql(UserEventListQuery)(withRouter(EventsIndex))

export default EventsIndexWithData
