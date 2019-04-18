/* 
  OK 1. Create the EventsList 
  OK 2. that renders an <li> in an <ul> for every event
  OK 3. Inside the <li> a <Link> (from react-router-dom) should        be used
  OK 4. to link to another page located on /events/:id. 
  OK 5. When there are no events yet, just display the text            'Loading...'. 
*/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
  renderEventList = (events) => {
    if (!events) return 'Loading...'
    return events.map(event => {
      return <Link to={`/events/${event.id}`} key={event.name}>
        <li>{event.name}</li>
      </Link>
    }
    )
  } 

  render() {
    const { events } = this.props
    return (
      <div>
        <ul>{this.renderEventList(events)}</ul>
      </div>
    )
  }
}

