import React from 'react'
import { Grid, Row, Col, Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getResources } from '../actions/manageResource'
import Resource from './Resource'

export class ManageResources extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getResources())
  }

  render() {
    return (
      <div className='manage-resources'>
        <Grid>
          <Row>
            <h1>Manage Resources</h1>
          </Row>
          {this.props.resources.map((resource, i) => {
            return (<Resource key={i} resource={resource} />)
          })}
          <Link to='/MainPage'>
            <button type="button" className="btn btn-primary">Home</button>
          </Link>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { resources: state.resources }
}

export default connect(mapStateToProps)(ManageResources)
