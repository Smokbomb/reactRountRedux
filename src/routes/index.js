import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import VideoList from '../pages/VideoList'
import VideoDetail from '../pages/VideoDetail'
import About from '../pages/About'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/videoList" component={VideoList} />
    <Route exact path="/videoDetail/:id" component={VideoDetail} />
  </Switch>
)