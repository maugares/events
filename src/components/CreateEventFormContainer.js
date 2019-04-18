import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions/events'
import EventForm from './EventForm'

class CreateEventFormContainer extends Component {
  state = {
    name: '',
    date: '',
    description: '',
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: this.state.name,
      date: this.state.date,
      description: this.state.description,
    })
    this.props.createEvent(this.state)
  }

  render() {
    return <EventForm
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      name={this.state.name}
      date={this.state.date}
      description={this.state.description}
    />
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer)
