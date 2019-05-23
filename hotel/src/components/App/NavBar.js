import React, {Component} from 'react';
import AuthService from "../../services/authService";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/userActions";
import { Link } from 'react-router-dom';
import capitalize from 'lodash.capitalize';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleUserName = (name) => {
      const delimiter = 9
      if(name.length > delimiter) {
          return `${capitalize(name).substr(0, delimiter)}...`
      } else {
          return capitalize(name)
      }
    
  }

  logout = () => {
    AuthService.logout();
    this.props.setUserInfo(null);
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {userInfo} = this.props
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Naturae</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {(userInfo && userInfo.name) ? this.handleUserName(userInfo.name) :  'Welcome'} 
                </DropdownToggle>
                <DropdownMenu right>
                  {!userInfo && <DropdownItem>
                    <Link to='/login'> Login </Link>
                  </DropdownItem>}
                  {userInfo &&<DropdownItem onClick={this.logout}>
                    Logout
                  </DropdownItem>}
                  {!userInfo &&<DropdownItem>
                    <Link to='/signup'> Signup </Link> 
                  </DropdownItem>}
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

const mapStateToProps = state => {
    return {
      userInfo: state.userReducer.user
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      setUserInfo: user => dispatch(setUserInfo(user))
    };
  };

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);