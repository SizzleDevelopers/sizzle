import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import Navbar from '../../client/components/Navbar'
import {MemoryRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../client/store'




test('Navbar showing', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  )

  t.is(wrapper.find('div').length, 7)
  t.is(wrapper.find('Links').exists(), true)
})
