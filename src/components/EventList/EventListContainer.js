/* 
  In the EventsListContainer 

  OK  1. we invoke the action creator loadEvents 
  OK  2. and dispatch the result
  OK  3. We also connect to the events part of the state
  
  Because we named our reducer events, we will retrieve either null or an array of events. This container does not concern itself with the presentation of the events, and just renders an EventsList with the available events (again, they could be null).
*/

import React from 'react'
import { loadEvents } from '../../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList'
import CreateEventFormContainer from '../../components/CreateEvent/CreateEventFormContainer';

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return <div>
      <EventsList events={this.props.events} />
      <CreateEventFormContainer />
    </div>
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)