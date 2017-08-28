import React from 'react'
import {Grid, Row, Col, Input, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class ManageResources extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let resources = this.props.resources
    return (
      <div>
        <Grid>
          <Row>
            <h1>Manage Resources</h1>
          </Row>
        {this.props.resources.map((resource, i) => {
          return (
            <div key={i}>
              <Row>
              <h1>{resource.title}</h1>
            </Row>
            <Row>
              <h1>{resource.type}</h1>
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
