import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../client/store'
import {MemoryRouter as Router} from 'react-router-dom'

import Skills from '../../client/components/Skills'

test('Skills showing', t => {
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <Skills />
      </Provider>
    </Router>
)
  t.is(wrapper.find('.form-control').exists(), true)
  t.is(wrapper.find('.form-group').exists(), true)

  t.is(wrapper.find('.skillSearchResults').exists(), false)
  wrapper.find('button').simulate('click')
  t.is(wrapper.find('.skillSearchResults').exists(), true)

})
