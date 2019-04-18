import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventListContainer from './components/EventListContainer';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Route path="/" exact component={Home} />
            <EventListContainer/>
          </div>
        </Provider>
    );
  }
}

export default App;