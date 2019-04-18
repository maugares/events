import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

const store = createStore(reducer, enhancer)

export default store