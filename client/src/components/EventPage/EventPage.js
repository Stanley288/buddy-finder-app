import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { filter } from 'graphql-anywhere'
import EventPageHeader from './EventPageHeader'
import EventPageGuestList from './EventPageGuestList'

class EventPage extends React.Component{

  static propTypes = {
    data: React.PropTypes.shape({
      Event: React.PropTypes.object
    }),
    params: React.PropTypes.object.isRequired,
  }

  const event = this.props.data.Event

  render () {
    return (
      <div>Page Header: </div>
      <EventPageHeader event={filter(EventPageHeader.fragments.event, event)}/>
      <br />
      <div>Guest List: </div>
      <EventPageGuestList event={filter(EventPageGuestList.fragments.event, event)}/>rtenderedDateTime
    )
  }
}

const EventPageQuery = gql`query EventPageQuery($id: ID!) {
    Event(id: $id) {
      ... EventPageHeader
      ... EventPageGuestList
    }
  }
  ${EventPageHeader.fragments.event}
  ${EventPageGuestList.fragments.event}
`

const EventPageWithData = graphql(EventPageQuery, {
    options: (ownProps) => ({
      variables: {
        id: ownProps.params.eventId
      }
    })
  }
)(withRouter(EventPage))

export default EventPageWithData
