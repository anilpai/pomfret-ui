import React from 'react'
import Header from '../components/Header/index'
import { Segment } from 'semantic-ui-react'
import Results from './Results/index'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header label="Pomfret Results" />
        <Segment basic padded textAlign="center">
          <Results />
        </Segment>
      </div>
    )
  }
}

export default Dashboard
