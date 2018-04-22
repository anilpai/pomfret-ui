import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon, Header } from 'semantic-ui-react'
import './index.css'
import { bindActionCreators } from 'redux'
import { userIsAuthenticated } from '../../utils/auth'
import { logout } from '../../actions/user'

const LogoutLink = userIsAuthenticated(({ logout }) => (
  <Icon name="sign out" color="olive" onClick={() => logout()} />
))

class AppHeader extends React.Component {
  handlelogout = () => this.props.logout()

  render() {
    return (
      <header>
        <Header>
          <Header.Content as="h2">{this.props.label}</Header.Content>
          <LogoutLink logout={this.handlelogout} />
        </Header>
      </header>
    )
  }
}

AppHeader.propTypes = {
  label: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
