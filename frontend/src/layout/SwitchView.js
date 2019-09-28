import ChatRoomList from './components/ChatRoomList'
import React from 'react'
import StoryFormView from './StoryFormView'
import AnotherView from './AnotherView'

import {Route, Redirect, Switch} from 'react-router-dom'

export default class SwitchView extends React.Component {
  render = () => (
    <Switch>
      <Route path="/story-form-view" component={StoryFormView}/>
      <Route path="/another-view" component={AnotherView}/>
      <Redirect to="/story-form-view"/>
    </Switch>
  )
}
