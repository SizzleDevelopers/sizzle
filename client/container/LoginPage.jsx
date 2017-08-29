import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../components/Logo'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <Logo />
        <Info />
      </div>
    )
  }
}
