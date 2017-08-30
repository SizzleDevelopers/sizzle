// import './setup-dom'
// import React from 'react'
// import test from 'ava'
// import {shallow, mount} from 'enzyme'
// import {Provider} from 'react-redux'
// import store from '../../client/store'
// import {ManageResources} from '../../client/components/ManageResources'
// import {MemoryRouter as Router} from 'react-router-dom'
// import {createMockStore} from 'redux-test-utils'
//
// function getTestData() {
//   return {
//     resources: [
//       {
//         id: 2,
//         title: "bananna",
//         type: "skill",
//         user_id: 2,
//         event_id: 2
//       }, {
//         id: 4,
//         title: "disneyland",
//         type: "location",
//         user_id: 12,
//         event_id: 3
//       }
//     ]
//   }
// }
//
// test('manage resources', t => {
//   const props = getTestData()
//   const wrapper = shallow(<Provider store={createMockStore(props)}>
//     <ManageResources />
//   </Provider>)
//   t.is(wrapper.find('.resource').length, 2)
//   console.log(wrapper.find('div'));
//   t.is(wrapper.find('.resources').exists(), true)
// })
