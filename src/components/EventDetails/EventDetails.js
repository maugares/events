/* 
  OK 1. Create the EventDetails component. 
  OK 2. This is a functional component. 
  OK 3. This component will receive a event property that              contains
  -- 4. a date, 
  -- 5. a name and 
  -- 6. a description. 
  OK 7. Show the name in an <h1>, 
  OK 8. the date in an <i> 
  OK 9. and the description in an <p>. 
  -- 10. When the event is still loading, show 'Loading...'.
 */

import React from 'react'

export default function EventDetails(props) {
  if (!props.event) { return <div><h1>Loading...</h1></div> }
  else {
    return <div>
      <div>
        <h1>{props.event.name}</h1>
        <i>{props.event.date}</i>
        <p>{props.event.description}</p>
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  }
}