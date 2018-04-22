import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'
import SidebarMenu from './SidebarMenu'
import Dashboard from './Dashboard'
import Feature from './Feature'
import { Dimmer } from 'semantic-ui-react'

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir
} from '../utils/auth'

class App extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <div className="openSidebar">
            {!!this.props.token ? <SidebarMenu /> : null}
            <Dimmer.Dimmable className="container">
              <Route
                path="/login"
                exact="true"
                component={userIsNotAuthenticatedRedir(Login)}
              />
              <Route
                path="/"
                exact="true"
                component={userIsAuthenticatedRedir(Home)}
              />
              <Route
                path="/home"
                exact="true"
                component={userIsAuthenticatedRedir(Home)}
              />
              <Route
                path="/dashboard"
                exact="true"
                component={userIsAuthenticatedRedir(Dashboard)}
              />
              <Route
                path="/feature"
                exact="true"
                component={userIsAuthenticatedRedir(Feature)}
              />
            </Dimmer.Dimmable>
          </div>
        </Switch>
      </Router>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.object,
  token: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  token: state.auth.token
})

export default connect(mapStateToProps)(App)
