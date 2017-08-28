import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from '../components/Navbar'
// import DataEntryPage from '../container/DataEntryPage'
import LoginPage from '../container/LoginPage'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 77e93b7d9a407514a355d162c0e1d8f846babcf7
=======

// import EventPage from '../container/EventPage'
>>>>>>> parent of 77e93b7... eventpage merge
=======

// import EventPage from '../container/EventPage'
>>>>>>> parent of 77e93b7... eventpage merge
import MainPage from './MainPage'
import MakeResource from './MakeResource'

import EventPage from '../container/EventPage'
import EventList from '../container/EventList'
import ManageEventPage from '../container/ManageEventPage'



const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LoginPage}/>

        <Route exact path='/' component={MainPage}/>
        <Route exact path='/MakeResource' component={MakeResource}/>

        <Route exact path='/event' component={EventPage}/>
        <Route exact path='/eventlist' component={EventList}/>
        <Route exact path='/manageevent' component={ManageEventPage}/>
        <div className='quote'>
          <Navbar />
        </div>
      </div>
      </Router>
  )
}

export default App
