import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu} from 'semantic-ui-react'
import Logo from '../components/Logo/index'

class SidebarMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <nav>
        <Menu fluid color="blue" vertical icon="labeled">
          <Logo />
          <Menu.Item
            name="home"
            as={Link}
            to="/home"
            onClick={this.handleItemClick}
            active={activeItem === 'home'}
          >
            <Icon name="home" />Home
          </Menu.Item>
          <Menu.Item
            name="dashboard"
            as={Link}
            to="/dashboard"
            onClick={this.handleItemClick}
            active={activeItem === 'dashboard'}
          >
            <Icon name="truck" />Dashboard
          </Menu.Item>
          <Menu.Item
            name="feature"
            as={Link}
            to="/feature"
            onClick={this.handleItemClick}
            active={activeItem === 'feature'}
          >
            <Icon name="truck" />Feature
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
}

export default SidebarMenu
