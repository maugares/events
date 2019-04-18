/* 
  OK 0. Create a reducer in reducers/events.js that
  OK 1. responds to the EVENTS_FETCHED action by 
  OK 2. replacing the state with action.events. 
  OK 3. The default state should be null. 
  OK 4, Add the events reducer to the reducers/index.js. 
*/

import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCESS } from "../actions/events"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload

    case EVENT_CREATE_SUCCESS:
      return [...state, action.payload]

    case EVENT_DELETE_SUCCESS:
      return state = state.filter(event => {
        return event.id !== action.payload
      })

    default:
      return null
  }
}