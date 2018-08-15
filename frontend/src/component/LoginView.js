import React, { Component } from 'react';
import '../css/eugenio-bootstrap.css';
import eugenioLogo from '../img/eugenio.png';
import { browserHistory } from 'react-router';
import Message, {MessageType} from '../component/Message';
import { I18n }  from 'react-i18nify';
import { ButtonLoading } from '../component/ButtonLoading';

class Login extends Component {
  state = {
    username: 'vcosta', 
    password: 'vcosta123', 
    tenant: 'eugenio_demo', 
    apiKey: 'DwHgwFyxRl1Rez3HOGKwUczoTfvwWomq'
  };
	render() {
		return (
			<div>
      <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <form>
            <fieldset>
              <legend>
                <img src={eugenioLogo} className="App-logo" alt="logo" />
              </legend>

              <div className="form-group">
               <label htmlFor="username">{ I18n.t('login.username') }</label>
               <input id="username" type="text" placeholder={ I18n.t('login.username') } className="form-control" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}></input>
              </div>

              <div className="form-group">
               <label htmlFor="password">{ I18n.t('login.password') }</label>
               <input id="password" type="password" placeholder={ I18n.t('login.password') } className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}></input>
              </div>

              <div className="form-group">
                <label htmlFor="tenant">{ I18n.t('common.organization') }</label>
                <input id="tenant" type="text" placeholder={ I18n.t('common.organization') } className="form-control" value={this.state.tenant}  onChange={(e) => this.setState({ tenant: e.target.value })}></input>
              </div>

              <div className="form-group">
                <label htmlFor="tenant">{ I18n.t('login.apiKey') }</label>
                <input id="apiKey" type="text" placeholder={ I18n.t('login.apiKey') } className="form-control" value={this.state.apiKey} onChange={(e) => this.setState({ apiKey: e.target.value })}></input>
              </div>
              <ButtonLoading type="button" onClick={() => this.props.onSubmit(this.state)} label={ I18n.t('login.signIn') } showLoading={this.props.showLoading} className="btn btn-primary" />
            </fieldset>
            {this.props.messageTitle}
            <Message
              message={I18n.t('login.message.errorLogin')} 
              specificMessage={this.props.error}
              visible={!!this.props.error}
              messageType={MessageType.ERROR}
            />
          </form>
        </div>
        <div className="col-md-4">
        </div>
      </div>
			</div>
		)
	}

}

export default Login;