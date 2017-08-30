import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap'
import { deleteResource } from '../actions/resources'


export class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  onDeleteLinkClicked(e) {
    this.props.dispatch(deleteResource(this.props.resource))
  }

  render() {
    let resource = this.props.resource
    return (
      <Row>
        <Panel className='event'>
          <Grid>
            <h3>{resource.title}</h3>
            <p><i>{resource.type}</i></p>
            <Row>
              <div className='text-right'>
                <Col>
                  <Button style={{ marginRight: '3rem' }} bsStyle='danger' onClick={this.onDeleteLinkClicked.bind(this)}>Delete</Button>
                </Col>
              </div>
            </Row>
          </Grid>
        </Panel>
      </Row>
    )
  }
}
export default connect()(Event)

