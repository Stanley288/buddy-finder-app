import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import moment from 'moment'


const style = {

}

class CreateFormSideBar extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    mutate: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  constructor(props){
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      dateTime: '',
      location: {
        address: '',
        latitude: null,
        longitude: null,
      }
      desc: '',
    }
    this.state.location = this.props.location
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          Create Event Form
          <br/>
          <form>
            <TextField floatingLabelText="Enter the name of the event"
              name="name"
              value={this.state.name}
              onChange={this.handleText}/>
            <br/>
            <DatePicker floatingLabelText="Enter the date for the event"
              autoOk={true}
              container="inline"
              mode="landscape"
              onChange={this.handleDate}/>
            <br/>
            <TimePicker floatingLabelText="Enter the time for the event"
              autoOk={true}
              mode="landscape"
              onChange={this.handleTime}/>
            <br/>
            <TextField floatingLabelText="Enter the description for the event"
              name="eventDesc"
              value={this.state.desc}
              multiLine={true}
              rows={4}
              rowsMax={6}
              onChange={this.handleText}/>
            <br/>
            <button onClick={this.handleCreateEvent}>
              Create Event
            </button>
          </form>
        </div>
      </MuiThemeProvider>
    )
  }

  handleCreateEvent = (event) => {
    event.preventDefault()
    let momentTime = moment(this.state.time);
    let momentDate = moment(this.state.date);
    let renderedDateTime = moment({
      year: momentDate.year(),
      month: momentDate.month(),
      day: momentDate.date(),
      hour: momentTime.hours(),
      minute: momentTime.minutes()
    })
    this.setState({dateTime: renderedDateTime})

    const {name, dateTime, lat, lng, desc} = this.state

    const hostID = this.props.params.hostID

    this.props.mutate({variables: {name, hostID, dateTime.toISOString(), lat, lng, desc}})
      .then()
  }

  handleCancel = () => {

  }

  handleText = (event, text) => {
    let name = event.target.name
    this.setState({[name]: text})
  }

  handleTime = (event, time) => {
    this.setState({time: time})
  }

  handleDate = (event, date) => {
    this.setState({date: date})
  }
}


const CreateEventFormMutation = gql`mutation CreateEventFormMutation(
    $name: String!, $hostID: ID!, $dateTime: String!,
    $location: Location!, $desc: String) {
      createEvent(title: $name, id: $hostID, date: $dateTime,
        location: $location, desc: $desc) {
          id
      }
  }
`

const CreateEventFormWithMutations = graphql(CreateEventFormMutation)(withRouter(CreateEventForm))

export default CreateEventFormWithMutations
