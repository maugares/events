/*
  Create the EventForm container. 
  OK  1. This should be a simple functional component 
  OK  2. Without state
  OK  3. Calling the onSubmit 
  OK  4. and onChange callbacks. 
  OK  5. The <input> fields should also use the values. 
  OK  6. Add a field for name, date and description 
  OK  7. and a submit button.
 */

import React from 'react'
import '../../App.css'

export default function EventForm(props) {
  return (
    <div>
      <form className='submit-form'>
        name <input
          type='text'
          name='name'
          value={props.name}
          onChange={props.onChange} />
        date <input
          type='date'
          name='date'
          value={props.date}
          onChange={props.onChange} />
        description <input
          type='text'
          name='description'
          value={props.description}
          onChange={props.onChange} />
        <button onClick={props.onSubmit}>Submit</button>
      </form>
    </div>
  )
}
