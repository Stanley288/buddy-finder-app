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

class CreateEventFormTemplate extends React.Component{

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    mutate: React.PropTypes.func.isRequired,
// Params are extracted from url, this is a propType created by react-router
    params: React.PropTypes.object.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      name: '',
      host: '',
      date: '',
      time: '',
      date: moment(),
      lat: '',
      lng: '',
      desc: '',
    }
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          Hello Zhe!
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
            <button onClick={this.handleSaveTime}>
              Update Time
            </button>
            <h1>
              The current time is :{this.state.dateTime.format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </h1>
            <button onClick={this.handleCreateEvent}>
              Create Event
            </button>
          </form>
        </div>
      </MuiThemeProvider>
    )
  }
// This is just to test the conversion to moment() works
  handleSaveTime = (event) => {
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

    // Depending on how we store our dateTime objects, use appropriate conversion
    const MomentToDateObject = this.state.dateTime.toDate()

    this.props.mutate({variables: {name, hostID, dateTime, lat, lng, desc}})
      .then(() => {
        this.props.router.replace('/')
      })
  }

  handleCancel = () => {
    this.props.router.replace('/')
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
      createEvent(title: $name, id: $hostID, date: $date,
        location: $location, desc: $desc) {
          id
      }
  }
`

const CreateEventFormWithMutations = graphql(CreateEventFormMutation)(withRouter(CreateEventFormTemplate))

export default CreateEventFormWithMutations
