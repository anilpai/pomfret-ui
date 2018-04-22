import React from 'react'
import Header from '../components/Header/index'
import { Icon, Segment } from 'semantic-ui-react'

class Feature extends React.Component {
  render() {
    return (
      <div>
        <Header label="Feature" />
        <Segment basic padded textAlign="center">
          <Icon name="hourglass half" size="massive" />
          <h3>Feature : Work in progress</h3>
        </Segment>
      </div>
    )
  }
}

export default Feature
