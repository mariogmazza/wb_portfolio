import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Landingpage from '../containers/pages/Landingpage'
import MemoSection from '../components/MemoSection'
import XMovie from '../components/XmovieSection'
import WeatherApp from '../components/WeatherSection'
import NprScraper from '../components/NprSection'


class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Landingpage} />
          <Route exact path='/memo' component={MemoSection} />
          <Route exact path='/xmovie' component={XMovie} />
          <Route exact path='/weatherapp' component={WeatherApp} />
          <Route exact path='/npmscraper' component={NprScraper} />
      </Switch>
    );
  }
}

export default App;
