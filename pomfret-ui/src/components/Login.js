import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reqlogin } from '../actions/user'
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      passwd: '',
      token: '',
      userInputError: false,
      passwdInputError: false
    }
  }

  handleChange = event => {
    let value = event.target.value
    let name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleOnLoginButtonClick = event => {
    event.preventDefault()

    let { user, passwd } = this.state
    if (user.trim().length <= 0) {
      this.setState({
        userInputError: true
      })
    } else if (passwd.trim().length <= 0) {
      this.setState({
        passwdInputError: true
      })
    } else {
      this.props.reqlogin(user, passwd)
    }
  }

  render() {
    let alert = null

    if (!this.props.auth.isLoging && this.props.auth.errmsg === '401') {
      alert = (
        <Message error>
          <Message.Header>Login Failure, Please try again!</Message.Header>
        </Message>
      )
    }

    return (
      <div className="login-form">
        {alert}
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as="h2" color="blue" textAlign="center">
              Pomfret
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  name="user"
                  error={this.state.userInputError}
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.user}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  name="passwd"
                  error={this.state.passwdInputError}
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.passwd}
                  onChange={this.handleChange}
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  type="submit"
                  disabled={this.props.auth.isLoging}
                  onClick={this.handleOnLoginButtonClick}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reqlogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
