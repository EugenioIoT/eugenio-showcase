import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginView from '../component/LoginView';
import {fetchLogin} from '../actions/LoginActions';
import { bindActionCreators } from 'redux';

class LoginContainer extends Component {
  login = (loginData) => {
    console.log('action login container');
    this.props.fetchLogin(loginData);
    console.warn(loginData);
  };

  render() {
    return (
      <LoginView 
        {...this.props}
        onSubmit={this.login}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const loginState = state.login;
  return {
    error: loginState.error,
    showLoading: loginState.showLoading
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchLogin,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
