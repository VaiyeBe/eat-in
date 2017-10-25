import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import creds from '../creds';
import '../css/signup';

// need to import the aws-signup process and then inject it into the handleSubmit event
// if I can't get the authorization to work based off the aws cognito login I may have to switch this all over to backendless

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    this.setState({ newUser: 'test' });
    this.setState({ isLoading: false });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={ this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={ this.state.confirmationCode }
            onChange={ this.handleChange }
          />
        <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={ !this.validateConfirmationForm() }
          type="submit"
          isLoading={ this.state.isLoading }
          text="Verify"
          loadingText="Verifying..."
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={ this.state.email }
            onChange={ this.handleChange }
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password></ControlLabel>
          <FormControl
            value={ this.state.password }
            onChage={ this.handleChange }
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password></ControlLabel>
          <FormControl
            value={ this.state.password }
            onChage={ this.handleChange }
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={ !this.validatForm() }
          type="submit"
          isLoading={ this.state.isLoading }
          text="Signup"
          loadingText="Signing Up..."
        />
      </form>
    );
  }

  render() {
    return (
      <div classnName="Signup">
      { this.state.newUser === null
        ? this.renderForm()
      : this.renderConfirmationForm() }
      </div>
    );
  }
}
