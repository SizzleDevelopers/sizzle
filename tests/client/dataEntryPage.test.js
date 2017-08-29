import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../client/store'
import {MemoryRouter as Router} from 'react-router-dom'

import DataEntryPage from '../../client/container/DataEntryPage'

test('DataEntryPage showing', t => {
  const wrapper = mount(
  <Router>
      <Provider store={store}>
    <DataEntryPage />
    </Provider>
  </Router>

  )
  t.is(wrapper.find('h1').text(), 'Logo')
})
