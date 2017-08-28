import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from '../components/Navbar'
import LoginPage from '../container/LoginPage'
import MainPage from './MainPage'
import MakeResource from './MakeResource'
import EventPage from '../container/EventPage'
import EventList from '../container/EventList'
import ManageResources from './ManageResources'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/MainPage' component={MainPage}/>
        <Route exact path='/MakeResource' component={MakeResource}/>
        <Route exact path='/ManageResources' component={ManageResources}/>
        <Route exact path='/event' component={EventPage}/>
        <Route exact path='/eventlist' component={EventList}/>
        <div className='quote'>
          <Navbar />
        </div>
      </div>
      </Router>
  )
}

export default App
