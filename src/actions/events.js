import request from 'superagent'
const baseUrl = 'http://localhost:4000'

/*-------     loadEvents     -------*/

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
})

export const loadEvents = () => (dispatch, getState) => {

  // when the state already contains events, we don't fetch them again
  console.log('GET STATE():', getState())
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {

      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

/*-------     createEvents     -------*/

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

/*-------     loadEvent     -------*/

export const EVENT_FETCHED = 'EVENT_FETCHED'

export const eventFetched = (event) => ({
  type: EVENT_FETCHED,
  payload: event
})

export const loadEvent = (id) => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => {
      return dispatch(eventFetched(response.body))
    })
}

/*-------     deleteEvent     -------*/

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

export const eventDeleted = (event) => ({
  type: EVENT_DELETE_SUCCESS,
  payload: event
})

export const deleteEvent = (id) => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventDeleted(id))
    })
}