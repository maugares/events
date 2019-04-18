/* 
  OK 1. Create the EventsList 
  -- 2. that renders an <li> in an <ul> for every event
  -- 3. Inside the <li> a <Link> (from react-router-dom) should        be used
  -- 4. to link to another page located on /events/:id. 
  -- 5. When there are no events yet, just display the text            'Loading...'. 
*/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
  renderEventList = (events) => {
    if (!events) return 'Loading...'
    else events.map(event =>
      <ul>
        <li>
          <Link to="/events/:id">{event}</Link>
        </li>
      </ul>
    )
  }

  render() {
    const { events } = this.props
    console.log('Events from EventsList:', events)
    console.log('renderEventList():', this.renderEventList())
    return (
      <div>

      </div>
    )
  }
}

