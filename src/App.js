import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventListContainer from './components/EventListContainer';
import CreateEventFormContainer from './components/CreateEventFormContainer';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Route path='/' exact component={EventListContainer}/>
            <CreateEventFormContainer />
          </div>
        </Provider>
    );
  }
}

export default App;