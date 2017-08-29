import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../client/store'
import {MemoryRouter as Router} from 'react-router-dom'

import Ingredients from '../../client/components/Ingredients'

test('Ingredients showing', t => {
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <Ingredients />
      </Provider>
    </Router>
)
  t.is(wrapper.find('.form-control').exists(), true)
  t.is(wrapper.find('.form-group').exists(), true)

  t.is(wrapper.find('.ingredientSearchResults').exists(), false)
  wrapper.find('button').simulate('click')
  t.is(wrapper.find('.ingredientSearchResults').exists(), true)

})
