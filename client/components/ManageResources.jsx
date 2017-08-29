import React from 'react'
import {Grid, Row, Col, Input, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getResources } from '../actions/manageResource'
import {deleteResource} from '../actions/manageResource'

export class ManageResources extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getResources())
  }
  onDeleteLinkClicked(e) {
    const resource = this.props.resources.find((resource) => resource.id == e.target.id)
    this.props.dispatch(deleteResource(resource))
  }

  render() {
    // let resources = this.props.resources
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Manage Resources</h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
          {this.props.resources.map((resource, i) => {
            return (
              <div key={i}>
                <Row>
                  <h1>{resource.title}</h1>
                </Row>
                <Row>
                  <p>{resource.type}</p>
                  <a id={resource.id} onClick={this.onDeleteLinkClicked.bind(this)}>Delete</a>
                </Row>
              </div>
            )
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
  return {resources: state.resources}
}

export default connect(mapStateToProps)(ManageResources)
