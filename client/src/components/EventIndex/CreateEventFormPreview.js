import React from 'react'
import { Link } from 'react-router'

class CreateEventFormPreview extends React.Component {

  static propTypes = {
    hostID: React.PropTypes.string.isRequired,
  }

  render () {
    return (
      <Link
        to={`/create/${this.props.hostID}`}
        style={{ minWidth: 200 }}
      >
        <div>
          + Create New Event
        </div>
      </Link>
    )
  }
}

export default CreateEventFormPreview
