import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../client/store'
import App from '../../client/components/App'
import {MemoryRouter as Router} from 'react-router-dom'

App.prototype.componentDidMount = () => {}

test('App renders with a router', t => {
  const wrapper = mount(
    <Provider store={store}>
        <App Router={Router}/>
    </Provider>)

  t.is(wrapper.find('Router').exists(),true)
  // t.is(wrapper.find('.app-container').exists(),true)
})
