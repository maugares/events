/* 
  DONE  0. Create a reducer in reducers/events.js that
  DONE  1. responds to the EVENTS_FETCHED action by 
  DONE  2. replacing the state with action.events. 
  DONE  3. The default state should be null. 
  DONE  4, Add the events reducer to the reducers/index.js. 
*/

import { EVENTS_FETCHED } from "../actions/events"

const initialState = {
  events: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload

    default:
      return null
  }
}