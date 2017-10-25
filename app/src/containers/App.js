import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { authUser, signOutUser } from "../libs/awsLib";
import RouteNavItem from "../components/RouteNavItem";
import Routes from '../Routes';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  // need to figure out how to move this promise based feature out of componentDidMount()?
  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  // the logout event is a user-specific function. This may need to be handed over to a state management tool.
  // i.e. import a state manangement store into this parent app export and then invoke these functions from that.
  handleLogout = event => {
    signOutUser();

    this.userHasAuthenticated(false);

    this.props.history.push('/login');
  }

  // I don't love that we have to define childProps in a rendering function.
  // Goal: try to move this outside of this render function.
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {
              this.state.isAuthenticated
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : [
                <RouteNavItem key={1} href="/signup">
                  Signup
                </RouteNavItem>,
                <RouteNavItem key={2} href="/login">
                  Login
                </RouteNavItem>
                ]
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={ childProps } />
    </div>
  );
  }
}

export default withRouter(App);
