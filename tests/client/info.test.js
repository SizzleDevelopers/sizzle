import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import Info from '../../client/components/Info'

test('Info showing', t => {
  const wrapper = shallow(<Info />)
  t.is(wrapper.find('h1').text(), 'Sizzle')
})
