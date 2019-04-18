import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions/events'
import EventForm from './EventForm'

export class CreateEventFormContainer extends Component {
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
      name: '',
      date: '',
      description: '',
    })
    this.props.createEvent(this.state)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer)
