import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { loadEvent, /* updateEvent, */ deleteEvent } from '../../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  // onDelete = (id) => {
  //   this.props.deleteEvent(Number(this.props.match.params.id))
  //   this.props.history.push('/')
  // }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  render() {
    return <EventDetails
      onDelete={this.onDelete}
      event={this.props.event}
    />
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetailsContainer)