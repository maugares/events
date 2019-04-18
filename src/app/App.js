import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventListContainer from '../components/EventList/EventListContainer';
import EventDetailsContainer from '../components/EventDetails/EventDetailsContainer';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Route path='/' exact component={EventListContainer}/>
            <Route path='/events/:id' component={EventDetailsContainer}/>
          </div>
        </Provider>
    );
  }
}

export default App;