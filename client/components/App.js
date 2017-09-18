import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import LoginPage from '../container/LoginPage'
import MainPage from './MainPage'
import MakeResource from './MakeResource'
import EventPage from '../container/EventPage'
import EventList from '../container/EventList'
import ManageResources from './ManageResources'
import ManageEventPage from '../container/ManageEventPage'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/MainPage' component={MainPage}/>
        <Route exact path='/MakeResource' component={MakeResource}/>
        <Route exact path='/ManageResources' component={ManageResources}/>
        <Route exact path='/event' component={EventPage}/>
        <Route exact path='/eventlist' component={EventList}/>
        <Route exact path='/manageevent/:id' component={(props) => <ManageEventPage eventId={props.match.params.id}/>}/>
        <div className='quote'>
        </div>
      </div>
    </Router>
  )
}

export default App
